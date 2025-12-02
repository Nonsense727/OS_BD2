export const slides = [
  {
    id: 1,
    title: "Виртуал Хаягийн Орон Зай",
    content: 
      "Хийсвэрлэлгүй үе: Програм физик хаягт шууд ханддаг байсан нь системийн аюулгүй байдлыг алдагдуулдаг.\n" +
      "Address Space: Процесс бүрт зориулсан хийсвэр санах ойн хаягийн багц.\n" +
      "Хамгаалалт: Base & Limit регистр ашиглан нэг процессыг нөгөөгөөс нь тусгаарлана.\n" +
      "Физик Хаяг = Логик Хаяг + Base",
    subtitle: "Санах Ойн Хийсвэрлэл ба Техник Хангамжийн Хамгаалалт",
    backgroundColor: "#1f2937", // Dark Slate
    textColor: "white",
    visualHint: "img1"
  },
  {
    id: 2,
    title: "Multiprogramming & Хуваагдал",
    content: 
      "Fixed Partitions (Тогтмол хуваалт): Санах ойг урьдчилан тодорхойлсон хэсгүүдэд хуваах.\n" +
      "Дотоод хуваагдал (Internal Fragmentation): Хуваалт доторх ашиглагдаагүй үлдэгдэл зай (процесс < хуваалт).\n" +
      "Гадаад хуваагдал (External Fragmentation): Олон жижиг, тасархай сул зайнууд үүсэх. Энэ нь санах ойг бүхлээр нь ашиглах боломжгүй болгодог.",
    subtitle: "Олон Процессын Асуудлууд",
    backgroundColor: "#4c51bf", // Indigo
    textColor: "white",
    visualHint: "img2"
  },
  {
    id: 3,
    title: "Swapping: Зөөх & Нягтруулах",
    content: 
      "Swapping: RAM-д зай хүрэхгүй үед идэвхгүй процессыг **бүхлээр нь** Диск (Backing Store) руу хуулах.\n" +
      "Ялгаа: Swapping нь бүхэл процессыг зөөдөг. Virtual Memory (Paging) нь зөвхөн хэсгийг зөөдөг.\n" +
      "Memory Compaction: Гадаад хуваагдлыг арилгахын тулд бүх процессыг шахаж, сул зайг нэгтгэх. CPU-д их ачаалал өгдөг.",
    subtitle: "RAM-ийн Хязгаарлалтыг Давах Техник",
    backgroundColor: "#319795", // Teal
    textColor: "white",
    visualHint: "img3"
  },
  {
    id: 4,
    title: "Сул Зайг Хянах Бүтэц",
    content: 
      "1. Bitmaps (Бит Зураглал): Блок бүрийг 0/1-ээр тэмдэглэнэ. Том сул зай олох нь удаан.\n" +
      "2. Linked Lists (Холбоост Жагсаалт): Эзлэгдсэн (P) болон Сул (H) сегментүүдийг дараалсан жагсаалтаар хадгална.\n" +
      "Давуу тал: Сул зайнуудыг нэгтгэх (Coalescing) нь хялбар бөгөөд хурдан.",
    subtitle: "Ашиглагдаагүй Санах Ойг Бүртгэх Арга",
    backgroundColor: "#f6ad55", // Light Orange
    textColor: "#333",
    visualHint: "img4"
  },
  {
    id: 5,
    title: "Хуваарилалтын Алгоритмууд",
    content: 
      "First Fit: Жагсаалтын эхнээс таарсан **хамгийн эхний** зайг сонгоно. (Хамгийн хурдан, үр ашигтай).\n" +
      "Best Fit: Хамгийн бага илүүдэл үлдээх зайг сонгоно. (Жижиг цоорхой үүсэх эрсдэлтэй).\n" +
      "Worst Fit: Хамгийн **том** сул зайг сонгоно. (Үлдсэн зай нь ашиглагдах боломжтой).\n" +
      "Эдгээр нь Linked List-д суурилсан хуваарилалтын стратегиуд юм.",
    subtitle: "Сул Зай Сонгох Стратегиуд",
    backgroundColor: "#9f7aea", // Light Purple
    textColor: "white",
    visualHint: "img5"
  },
  {
    id: 6,
    title: "Virtual Memory & Paging",
    content: 
      "Компьютер дээр олон програм зэрэг ажиллаж байхад нэг програм алдаа гарсан ч бусад нь нөлөөлдөггүй. Энэ нь OS-ийн тусгаарласан санах ой буюу virtual memory-гийн ач. OS програм бүрт тусдаа санах ойн орон зай өгдөг. RAM хүрэлцэхгүй байсан ч virtual memory болон paging технологи ашиглан програмыг ажиллуулж чадна.",
    subtitle: "Virtual Memory-ийн Үндсэн ойлголт",
    backgroundColor: "#2d3748",
    textColor: "white",
    visualHint: "img6"
  },
  {
    id: 7,
    title: "Paging гэж юу вэ?",
    content: 
      "Paging гэдэг нь програмын санах ойг жижиг блок буюу pages болгон хувааж, RAM-ыг адил хэмжээтэй frames болгон хуваах арга. Page Table нь аль page ямар frame-д байгааг хадгалдаг. Давуу тал нь RAM тасралтгүй байх шаардлагагүй, external fragmentation багасна, том програм ч RAM-д багтах боломжтой.",
    subtitle: "Paging-ийн Үндсэн зарчим",
    backgroundColor: "#319795",
    textColor: "white",
    visualHint: "img7"
  },
  {
    id: 8,
    title: "Virtual vs Physical Address",
    content: 
      "Програмууд virtual address буюу хийсвэр хаягийг ашиглаж ажиллана. CPU энэ хаягийг page table ашиглан physical address руу хөрвүүлдэг. Physical address нь RAM дахь жинхэнэ хаяг. Давуу тал нь програм тусдаа санах ойтой мэт ажиллаж, RAM бага ч том програм ажиллах боломжтой, аюулгүй байдал өндөр.",
    subtitle: "Хийсвэр ба Физик хаяг",
    backgroundColor: "#4c51bf",
    textColor: "white",
    visualHint: "img8"
  },
  {
    id: 9,
    title: "MMU & Page Table",
    content: 
      "MMU буюу Memory Management Unit нь virtual хаягийг physical хаяг руу хөрвүүлэх, page fault илрүүлэх, санах ойн хамгаалалтыг хянах үүрэгтэй. Page Table-д frame number, valid/invalid bit, protection bits (R/W/X), reference, dirty bit зэрэг мэдээлэл хадгалагддаг. TLB ашигласнаар хөрвүүлэлтийн хурдыг нэмэгдүүлдэг." ,
    subtitle: "Санах ойн хяналтын төхөөрөмж",
    backgroundColor: "#d53f8c",
    textColor: "white",
    visualHint: "img9"
  },
  {
    id: 10,
    title: "Multilevel & Inverted Page Table",
    content: 
      "Том virtual хаягтай програмд нэг шатны page table удаан байж болно. Тиймээс multilevel page table ашиглана. Энэ нь зөвхөн хэрэгтэй хэсгийг RAM-д ачаалдаг. Inverted page table-д RAM frame бүрт нэг entry бий. Бүх процесс нэг page table ашиглаж, frame → page харгалзлыг хадгалдаг.",
    subtitle: "Page Table-ийн төрөл",
    backgroundColor: "#ed8936",
    textColor: "#333",
    visualHint: "img10"
  },
  {
    id: 11,
    title: "Paging-г хурдлуулах техникүүд",
    content: 
      "Paging хурдлахын тулд TLB буюу Translation Lookaside Buffer-г ашиглана. Hit бол шууд хөрвүүлнэ, miss бол page table-аас хайна. TLB-г солих алгоритмууд: FIFO, LRU, Optimal, Clock. Зарим CPU-д OS өөрөө TLB-г удирддаг.",
    subtitle: "Хурдыг нэмэгдүүлэх арга",
    backgroundColor: "#38b2ac",
    textColor: "white",
    visualHint: "img11"
  },
];