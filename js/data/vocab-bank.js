// Kho từ vựng & Cụm từ chuẩn hoá phân cấp A1 -> B2 (Giao tiếp Hàng ngày & Công sở/CNTT)
// Nguồn dữ liệu: Oxford 3000/5000, Cambridge English Vocabulary Profile, Business & Tech Corpora

import { VOCAB_GROUPS } from './vocab-groups-data.js';

// Danh sách từ vựng phẳng (Flat Array) tích hợp metadata nhóm
export const VOCAB_BANK = VOCAB_GROUPS.flatMap(group =>
  group.words.map(w => ({
    ...w,
    groupId: group.groupId,
    groupName: group.name,
    groupIcon: group.icon,
    category: group.category || "daily"
  }))
);

export { VOCAB_GROUPS };
