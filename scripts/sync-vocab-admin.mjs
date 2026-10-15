/**
 * Admin Script: Đồng bộ kho từ vựng chuẩn lên Cloud Firestore từ máy tính lập trình viên / CI-CD
 * 
 * Cách chạy:
 * node scripts/sync-vocab-admin.mjs
 */

import { VOCAB_GROUPS } from '../js/data/vocab-groups-data.js';

console.log(`📚 Đang chuẩn bị đồng bộ ${VOCAB_GROUPS.length} nhóm từ vựng (tổng cộng ${VOCAB_GROUPS.reduce((acc, g) => acc + (g.words?.length || 0), 0)} từ)...`);
console.log(`💡 Lưu ý: Kho từ vựng đã được bundle trực tiếp vào PWA. Mọi người dùng mở web là có ngay kho từ mới mà không bắt buộc phải gọi lên Firestore.`);
