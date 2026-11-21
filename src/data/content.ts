export const links = {
  vps: "https://interdata.vn/thue-vps/",
  // Matches the trial CTA in the source project's components/header/menu.js.
  trial: "https://interdata.vn/thue-vps/#pricing",
  cloud: "https://interdata.vn/cloud-server/",
  dedicated: "https://interdata.vn/thue-may-chu-vat-ly/",
  colocation: "https://interdata.vn/vietnam-colocation/",
  about: "https://interdata.vn/gioi-thieu/",
  contact: "https://interdata.vn/lien-he/",
  careers: "https://interdata.vn/blog/?category=tuyen-dung",
  blog: "https://interdata.vn/blog/",
  tools: "https://interdata.vn/cong-cu/",
  promotion: "https://interdata.vn/canhme/",
  ticket: "https://support.interdata.vn/submitticket.php",
  register: "https://support.interdata.vn/register.php",
  login: "https://support.interdata.vn/index.php?rp=/login",
  privacy: "https://interdata.vn/chinh-sach-bao-mat/",
  terms: "https://interdata.vn/dieu-khoan-su-dung-dich-vu/",
  sla: "https://interdata.vn/cam-ket-chat-luong-dich-vu/",
};

export const services = [
  {
    id: "vps",
    name: "VPS",
    type: "Máy chủ ảo",
    icon: "server",
    description:
      "Một môi trường riêng để vận hành website, ứng dụng và công cụ của bạn.",
    features: [
      "Chủ động cài đặt phần mềm",
      "Chọn CPU, RAM theo mức tải",
      "Phù hợp website & self-host",
    ],
    href: links.vps,
    cta: "Tìm hiểu dịch vụ VPS",
  },
  {
    id: "cloud",
    name: "Cloud Server",
    type: "Hạ tầng đám mây",
    icon: "cloud",
    description:
      "Lựa chọn tài nguyên cho ứng dụng cần phát triển và mở rộng theo từng giai đoạn.",
    features: [
      "Lựa chọn cấu hình AMD / Intel",
      "Website, API & hệ thống nội bộ",
      "Trao đổi phương án mở rộng",
    ],
    href: links.cloud,
    cta: "Khám phá Cloud Server",
  },
  {
    id: "dedicated",
    name: "Thuê Máy Chủ",
    type: "Máy chủ vật lý riêng",
    icon: "database",
    description:
      "Phần cứng dành riêng cho workload cần tài nguyên lớn và quyền kiểm soát hệ thống.",
    features: [
      "Tài nguyên phần cứng riêng",
      "Ứng dụng & cơ sở dữ liệu lớn",
      "Chọn cấu hình theo yêu cầu",
    ],
    href: links.dedicated,
    cta: "Xem dịch vụ máy chủ",
  },
  {
    id: "colocation",
    name: "Chỗ Đặt Máy Chủ",
    type: "Không gian datacenter",
    icon: "network",
    description:
      "Bạn sở hữu thiết bị. InterData cung cấp môi trường datacenter để đặt máy chủ.",
    features: [
      "Dùng phần cứng bạn đang có",
      "Không gian, điện & kết nối",
      "Thống nhất phạm vi vận hành",
    ],
    href: links.colocation,
    cta: "Tìm hiểu chỗ đặt máy chủ",
  },
] as const;
export const solutions = [
  {
    id: "private-network",
    href: "https://interdata.vn/trien-khai-private-network/",
    name: "Triển khai Private Network",
    shortName: "Private Network",
    icon: "network",
    description:
      "Kết nối các máy chủ qua mạng riêng để tổ chức giao tiếp nội bộ. Trao đổi sơ đồ kết nối, phân vùng mạng và nhu cầu truy cập của hệ thống.",
    tags: "Mạng riêng · Kết nối nội bộ",
  },
  {
    id: "proxmox",
    href: "https://interdata.vn/trien-khai-proxmox-ceph/",
    name: "Triển Khai Ảo Hóa Proxmox / CEPH",
    shortName: "Proxmox / CEPH",
    icon: "layers",
    description:
      "Triển khai môi trường ảo hóa Proxmox kết hợp lưu trữ phân tán CEPH. Lựa chọn tài nguyên, kiến trúc cụm và phương án vận hành theo nhu cầu.",
    tags: "Ảo hóa · Lưu trữ phân tán",
  },
  {
    id: "kubernetes",
    href: "https://interdata.vn/trien-khai-Kubernetes-k8s/",
    name: "Triển khai Kubernetes (K8s)",
    shortName: "Kubernetes",
    icon: "boxes",
    description:
      "Triển khai ứng dụng container theo cụm. Làm rõ kiến trúc, môi trường chạy và trách nhiệm quản trị trước khi chọn.",
    tags: "Container · Điều phối ứng dụng",
  },
  {
    id: "vmware",
    href: "https://interdata.vn/trien-khai-vmware/",
    name: "Triển khai VMware",
    shortName: "VMware",
    icon: "database",
    description:
      "Triển khai môi trường máy ảo trên nền tảng VMware. Trao đổi tài nguyên, yêu cầu bản quyền và cách quản trị theo hệ thống bạn đang vận hành.",
    tags: "Máy ảo · Quản trị hạ tầng",
  },
  {
    id: "s3",
    href: "https://interdata.vn/s3-object-storage/",
    name: "Triển khai lưu trữ S3 Storage",
    shortName: "S3 Storage",
    icon: "harddrive",
    description:
      "Lưu trữ đối tượng cho tệp, hình ảnh và bản sao lưu. Đánh giá dung lượng, truy cập và yêu cầu tích hợp của ứng dụng.",
    tags: "Object storage · Dữ liệu",
  },
] as const;
