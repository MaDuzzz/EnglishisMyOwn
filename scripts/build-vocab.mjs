/**
 * Vocabulary Compiler & Validator
 * 
 * Tự động quét toàn bộ các file (.json, .js) trong thư mục data/vocab/
 * Kiểm tra tính hợp lệ của schema (id, level, collocations, optionsVi...)
 * Tổng hợp và xuất ra file js/data/vocab-groups-data.js phục vụ PWA Offline
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const vocabDir = path.join(rootDir, 'data', 'vocab');
const targetFile = path.join(rootDir, 'js', 'data', 'vocab-groups-data.js');

export async function buildVocabulary() {
  if (!fs.existsSync(vocabDir)) {
    console.error(`❌ Thư mục không tồn tại: ${vocabDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(vocabDir).filter(f => f.endsWith('.json') || f.endsWith('.js')).sort();
  console.log(`📁 Tìm thấy ${files.length} file dữ liệu trong ${vocabDir}:`);

  const allGroups = [];
  const groupIds = new Set();
  const wordIds = new Set();

  for (const file of files) {
    const filePath = path.join(vocabDir, file);
    let groupsFromFile = [];

    if (file.endsWith('.json')) {
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(content);
        groupsFromFile = Array.isArray(parsed) ? parsed : [parsed];
      } catch (err) {
        console.error(`❌ Lỗi cú pháp JSON trong file ${file}:`, err.message);
        process.exit(1);
      }
    } else if (file.endsWith('.js')) {
      try {
        const mod = await import(filePath);
        const data = mod.VOCAB_GROUPS || mod.GROUPS || mod.default;
        groupsFromFile = Array.isArray(data) ? data : [data];
      } catch (err) {
        console.error(`❌ Lỗi nạp module JS trong file ${file}:`, err.message);
        process.exit(1);
      }
    }

    let fileWordCount = 0;
    for (const group of groupsFromFile) {
      if (!group.groupId || !group.name) {
        console.warn(`⚠️ Bỏ qua nhóm không hợp lệ trong file ${file}:`, group);
        continue;
      }

      if (groupIds.has(group.groupId)) {
        console.warn(`⚠️ Cảnh báo trùng lặp groupId '${group.groupId}' trong file ${file}. Đang ghi đè.`);
      } else {
        groupIds.add(group.groupId);
      }

      // Chuẩn hoá thuộc tính nhóm
      group.category = group.category || (group.groupId.startsWith('it_') ? 'tech' : 'daily');
      group.level = group.level || 'B1';
      group.icon = group.icon || '📚';
      group.words = group.words || [];

      // Kiểm tra và chuẩn hoá từ vựng
      for (const w of group.words) {
        if (!w.id || !w.word) {
          console.error(`❌ Từ vựng thiếu id hoặc word trong nhóm ${group.groupId}:`, w);
          process.exit(1);
        }
        if (wordIds.has(w.id)) {
          console.warn(`⚠️ Cảnh báo trùng lặp word id '${w.id}' (${w.word})`);
        } else {
          wordIds.add(w.id);
        }
        w.level = w.level || group.level;
        w.type = w.type || 'phrase';
        w.ipa = w.ipa || '';
        w.meaningVi = w.meaningVi || '';
        w.collocations = w.collocations || '';
        w.example = w.example || '';
        w.exampleVi = w.exampleVi || '';
        if (!w.optionsVi || !Array.isArray(w.optionsVi) || w.optionsVi.length < 2) {
          w.optionsVi = [w.meaningVi, "Đáp án mẫu B", "Đáp án mẫu C", "Đáp án mẫu D"];
        }
        fileWordCount++;
      }

      allGroups.push(group);
    }

    console.log(`  ✓ ${file}: ${groupsFromFile.length} nhóm, ${fileWordCount} từ vựng`);
  }

  // Thống kê phân loại
  const statsByCat = {};
  const statsByLvl = {};
  for (const g of allGroups) {
    statsByCat[g.category] = (statsByCat[g.category] || 0) + g.words.length;
    for (const w of g.words) {
      statsByLvl[w.level] = (statsByLvl[w.level] || 0) + 1;
    }
  }

  // Xuất file js/data/vocab-groups-data.js
  const headerComment = `// Kho nhóm từ vựng chuẩn hoá phân cấp A1 -> B2
// TỰ ĐỘNG TẠO BỞI build-vocab.mjs - KHÔNG SỬA TRỰC TIẾP FILE NÀY
// Để thêm từ mới, hãy tạo file .json hoặc .js mới trong thư mục: data/vocab/
// Tổng cộng: ${allGroups.length} nhóm chủ đề, ${wordIds.size} từ vựng và cụm từ.
// Phân bố chủ đề: ${JSON.stringify(statsByCat)}
// Phân bố trình độ: ${JSON.stringify(statsByLvl)}

export const VOCAB_GROUPS = ${JSON.stringify(allGroups, null, 2)};
`;

  fs.writeFileSync(targetFile, headerComment, 'utf-8');
  console.log(`\n🎉 Đã biên dịch thành công:`);
  console.log(`- Nhóm chủ đề: ${allGroups.length}`);
  console.log(`- Tổng số từ vựng: ${wordIds.size}`);
  console.log(`- Phân bố danh mục:`, statsByCat);
  console.log(`- Phân bố Level:`, statsByLvl);
  console.log(`- Xuất ra file: ${targetFile}\n`);

  return allGroups;
}

// Chạy trực tiếp nếu file được gọi bằng node
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  buildVocabulary().catch(err => {
    console.error("Lỗi biên dịch từ vựng:", err);
    process.exit(1);
  });
}
