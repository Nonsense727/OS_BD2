export const slides = [
  {
    id: 1,
    title: "Виртуал Хаягийн Орон Зай",
    subtitle: "Санах Ойн Хийсвэрлэл ба Техник Хангамжийн Хамгаалалт",
    layout: 'dual', // Dual Column Layout: Content (2/3) + Visual (1/3)
    content:
      "Хийсвэрлэлгүй үе: Програм физик хаягт шууд ханддаг байсан нь системийн аюулгүй байдлыг алдагдуулдаг.\n" +
      "Address Space: Процесс бүрт зориулсан хийсвэр санах ойн хаягийн багц.\n" +
      "Хамгаалалт: Base & Limit регистр ашиглан нэг процессыг нөгөөгөөс нь тусгаарлана.\n" +
      "Физик Хаяг = Логик Хаяг + Base",
    backgroundColor: "#1f2937", // Dark Slate
    textColor: "white",
    visualHint: "img1"
  },

  // --- ШИНЭ ТӨРӨЛ: ХҮСНЭГТ (TABLE) ---
  {
    id: 2,
    title: "Сул Зайг Хянах Бүтцийн Харьцуулалт",
    subtitle: "Үр Ашиг ба Сул Тал",
    layout: 'table', // NEW Layout: Renders as a full-width Table
    content:
      "Санах ойн хуваарилалтын үндсэн хоёр аргачлалыг харьцуулъя. Бидний гол зорилго бол сул зайг хурдан, үр ашигтай олох явдал юм. Доорх хүснэгтэд тэдгээрийн ялгааг харуулав.",
    tableData: { // NEW Field for Table data
      headers: ['Үзүүлэлт', 'Bitmaps', 'Linked Lists'],
      rows: [
        ['Хуваагдал (Fragmentation)', 'Дотоод (Int.)', 'Гадаад (Ext.)'],
        ['Сул Зай Олох Хурд', 'Удаан ($O(N)$)', 'Хурдан ($O(L)$)'],
        ['Нягтруулах (Compaction)', 'Шаардлагагүй', 'Хялбар/Хурдан'],
        ['Удирдлагын Зардал', 'Бага (1 бит/блок)', 'Их (Pointer & Size)']
      ]
    },
    backgroundColor: "#4c51bf", // Indigo
    textColor: "white",
    visualHint: null
  },

  // --- ШИНЭ ТӨРӨЛ: ЗУРАГ ХАРЬЦУУЛАЛТ (COMPARISON) ---
  {
    id: 3,
    title: "Хуваагдлын Үр Дүн",
    subtitle: "Дотоод vs. Гадаад Хуваагдал",
    layout: 'comparison', // NEW Layout: Renders two side-by-side visual elements
    comparisonData: { // NEW Field for Comparison data
      left: {
        title: "Fixed Partitions (Дотоод)",
        visualHint: "img2", // img2 is assumed to show Fixed Partitioning
        description: "Хуваалт доторх ашиглагдаагүй үлдэгдэл зай (Internal Fragmentation) үүсч байна.",
      },
      right: {
        title: "Dynamic Partitions (Гадаад)",
        visualHint: "img3", // img3 is assumed to show Dynamic Partitioning
        description: "Олон жижиг тасархай сул зайнууд (External Fragmentation) үүсч байна.",
      }
    },
    backgroundColor: "#319795", 
    textColor: "white",
    visualHint: null
  },

  // Existing slides updated with 'layout: 'dual''
  {
    id: 4,
    title: "Swapping: Зөөх & Нягтруулах",
    subtitle: "RAM-ийн Хязгаарлалтыг Давах Техник",
    layout: 'dual',
    content:
      "Swapping: RAM-д зай хүрэхгүй үед идэвхгүй процессыг **бүхлээр нь** Диск (Backing Store) руу хуулах.\n" +
    content: 
      "Swapping: RAM-д зай хүрэхгүй үед идэвхгүй процессыг бүхлээр нь Диск (Backing Store) руу хуулах.\n" +
      "Ялгаа: Swapping нь бүхэл процессыг зөөдөг. Virtual Memory (Paging) нь зөвхөн хэсгийг зөөдөг.\n" +
      "Memory Compaction: Гадаад хуваагдлыг арилгахын тулд бүх процессыг шахаж, сул зайг нэгтгэх. CPU-д их ачаалал өгдөг.",
    backgroundColor: "#f6ad55",
    textColor: "#333",
    visualHint: "img4"
  },
  {
    id: 5,
    title: "Хуваарилалтын Алгоритмууд",
    subtitle: "Сул Зай Сонгох Стратегиуд",
    layout: 'dual',
    content:
      "First Fit: Жагсаалтын эхнээс таарсан **хамгийн эхний** зайг сонгоно. (Хамгийн хурдан, үр ашигтай).\n" +
    content: 
      "First Fit: Жагсаалтын эхнээс таарсан хамгийн эхний зайг сонгоно. (Хамгийн хурдан, үр ашигтай).\n" +
      "Best Fit: Хамгийн бага илүүдэл үлдээх зайг сонгоно. (Жижиг цоорхой үүсэх эрсдэлтэй).\n" +
      "Worst Fit: Хамгийн том сул зайг сонгоно. (Үлдсэн зай нь ашиглагдах боломжтой).\n" +
      "Эдгээр нь Linked List-д суурилсан хуваарилалтын стратегиуд юм.",
    backgroundColor: "#9f7aea",
    textColor: "white",
    visualHint: "img5"
  },
  // Slide 6: Виртуал Санах Ой
  {
    id: 6,
    title: "Виртуал Санах Ой",
    subtitle: "Virtual Memory & Paging",
    layout: 'dual',
    content:
      "Орчин үеийн системүүд програм бүрт тусдаа санах ойн орон зай өгдөг.\n\n" +
      "Давуу тал:\n" +
      "- Програмууд хоорондоо нөлөөлөхгүй\n" +
      "- Алдаа гарсан ч бусад програмд нөлөөлөхгүй\n" +
      "- RAM хүрэлцэхгүй ч програм ажиллах боломжтой\n" +
      "- Олон програм зэрэг ажиллах боломжтой",
    backgroundColor: "#1f2937",
    textColor: "white",
    visualHint: "img6"
  },

  // Slide 7: Paging
  {
    id: 7,
    title: "Paging (Хуудаслалт)",
    subtitle: "Virtual Memory Management",
    layout: 'dual',
    content:
      "Програмын санах ойг жижиг блок (pages) болгон хувааж, RAM дахь frames-тэй холбодог.\n\n" +
      "Давуу тал:\n" +
      "- RAM тасралтгүй байх шаардлагагүй\n" +
      "- Fragmentation багасна\n" +
      "- Том програм RAM-д багтаж ажиллах боломжтой",
    backgroundColor: "#4c51bf",
    textColor: "white",
    visualHint: "img7"
  },

  // Slide 8: Virtual vs Physical Address
  {
    id: 8,
    title: "Virtual vs Physical Address",
    subtitle: "Хийсвэр хаяг ба Физик хаяг",
    layout: 'table',
    content: "Virtual vs Physical addresses-ийн ялгаа",
    tableData: {
      headers: ['Төрөл', 'Тайлбар'],
      rows: [
        ['Virtual Address', 'Програм ашигладаг хийсвэр хаяг, RAM-ын байршлыг мэддэггүй.'],
        ['Physical Address', 'RAM дахь жинхэнэ хаяг, зөвхөн OS болон hardware мэднэ.']
      ]
    },
    backgroundColor: "#319795",
    textColor: "white",
    visualHint: null
  },

  // Slide 9: MMU
  {
    id: 9,
    title: "MMU (Memory Management Unit)",
    subtitle: "Виртуал хаягийг физик хаягт хөрвүүлэх",
    layout: 'dual',
    content:
      "CPU-д байрлах тусгай hardware.\n\n" +
      "Үүрэг:\n" +
      "1. Virtual → Physical address хөрвүүлэх\n" +
      "2. Page fault илрүүлэх\n" +
      "3. Санах ойн хамгаалалт хангах\n" +
      "4. TLB ашиглан хурдыг нэмэгдүүлэх",
    backgroundColor: "#f6ad55",
    textColor: "#333",
    visualHint: "img8"
  },

  // Slide 10: Page Table & PTE
  {
    id: 10,
    title: "Page Table & PTE",
    subtitle: "Paging-д мэдээллийн бүтэц",
    layout: 'dual',
    content:
      "Page Table нь виртуал хаягийг физик хаягт хөрвүүлэх хүснэгт юм.\n\n" +
      "PTE-д юу хадгалагддаг:\n" +
      "- Frame number (RAM-д хаана байгааг)\n" +
      "- Valid / Invalid бит\n" +
      "- Read / Write / Execute эрхүүд\n" +
      "- Reference ба Dirty бит",
    backgroundColor: "#9f7aea",
    textColor: "white",
    visualHint: "img9"
  },

  // Slide 11: Paging-г хурдлуулах техникүүд
  {
    id: 11,
    title: "Paging-г хурдлуулах техникүүд",
    subtitle: "TLB болон Page Replacement Алгоритм",
    layout: 'comparison',
    content:
      "Page Replacement Алгоритмууд\n" +
      "Өгөгдсөн page sequence: 7,0,1,2,0,3,0,4,2,3,0,3,0,3,2,1,2,0,1,7,0,1\n" +
      "Фрэйм: 3\n\n",
    comparisonData: {
      left: {
        title: "LRU (Least Recently Used)",
        visualHint: "img11_2",
        description: "Хамгийн сүүлд хэрэглэгдээгүй page солигдоно"
      },
      right: {
        title: "FIFO (First-In-First-Out)",
        visualHint: "img11",
        description: "Эхэнд ирсэн page-ийг эхэнд солих"
      }
    },
    backgroundColor: "#e53e3e",
    textColor: "white",
    visualHint: "img10"
  },
  {
    id: 12,
    title: "Paging-г хурдлуулах техникүүд",
    subtitle: "TLB болон Page Replacement Алгоритм",
    layout: 'comparison',
    content:
      "Page Replacement Алгоритмууд\n" +
      "Өгөгдсөн page sequence: 7,0,1,2,0,3,0,4,2,3,0,3,0,3,2,1,2,0,1,7,0,1\n" +
      "Фрэйм: 3\n\n",
    comparisonData: {
      left: {
        title: "Optimal",
        visualHint: "img11_1",
        description: "Ирээдүйд хамгийн удаан хэрэглэхгүй page-ийг солих (минимум шилжилт = 9)"
      },
      right: {
        title: "Clock (Цаган) алгоритм",
        visualHint: "img10",
        description: "Page-ийн R битийг шалгаж солих, TLB miss rate бууруулах"
      }
    },
    backgroundColor: "#e53e3e",
    textColor: "white"
  },
  {
    id: 13,
    title: "Segmentation vs Paging",
    subtitle: "Санах Ойн Логик ба Физик Хуваалт",
    layout: 'comparison',   // ← SAME as slide 12
    content:
      "Paging → ижил хэмжээтэй frame-д хуваах.\n" +
      "Segmentation → програмын логик модулиудад хувьсах хэмжээтэй хуваалт.\n" +
      "Paging нь internal fragmentation үүсгэдэг, Segmentation нь external fragmentation үүсгэдэг.\n",
    comparisonData: {
      left: {
        title: "Paging",
        visualHint: "img16_2",      // ← INSERT FIRST IMAGE
        description: "Санах ойг тэнцүү хэмжээтэй pages болгож хуваана."
      },
      right: {
        title: "Segmentation",
        visualHint: "img16_1",      // ← INSERT SECOND IMAGE
        description: "Логик модульд тулгуурласан хувьсах хэмжээтэй сегментүүд."
      }
    },
    backgroundColor: "#1f2937",
    textColor: "white"
  },
  {
    id: 14,
    title: "Segmentation-ийн Давуу Талууд",
    subtitle: "Хамгаалалт ба Хуваалцах боломж",
    layout: 'table', // Table layout ашиглана
    content: "Segment-ийн давуу талуудыг харьцуулан үзүүлэв:",
    tableData: {
      headers: ['Давуу тал', 'Тайлбар'],
      rows: [
        ['Логик модульчлал', 'Code, Data, Stack-г тусад нь хадгалж, програмыг ойлгоход хялбар.'],
        ['Хамгаалалт (R/W/X)', 'Segment бүрт унших, бичих, гүйцэтгэх эрхийг тохируулах боломжтой.'],
        ['Хуваалцах боломж', 'Олон процесс segment-ийг share хийж ашиглах боломжтой.'],
        ['Тусгаарлалт', 'Stack, Code, Data-г тусгаарлах нь алдаанаас хамгаалдаг.']
      ]
    },
    backgroundColor: "#4c51bf",
    textColor: "white",
    visualHint: null
  },
  {
    id: 15,
    title: "Segmentation with Paging",
    content:
      "- Logical address → Segment selector → Page table → Frame\n" +
      "- MULTICS, Intel x86 архитектурт хэрэглэгддэг\n" +
      "- Хамгаалалт + хуваалцах + memory management-ийг хослуулсан",
    subtitle: "Хосолсон Загвар",
    backgroundColor: "#319795",
    textColor: "white",
    visualHint: "img18"
  },
  {
    id: 16,
    title: "Thrashing & Page Size",
    content:
      "- Thrashing → байнгын page fault → CPU удаашрал\n" +
      "- Жижиг page → бага internal fragmentation\n" +
      "- Том page → page table бага, locality өндөр\n" +
      "- OS workload тохиргоо чухал",
    subtitle: "Системийн Ачаалал ба Хуудасны Сонголт",
    backgroundColor: "#f6ad55",
    textColor: "#333",
    visualHint: "img19"
  },
  {
    id: 17,
    title: "Locking Pages & Backing Store",
    content:
      "- I/O үед page-г RAM-д түгжих (Pinned pages)\n" +
      "- Swap space / Backing store → RAM хүрэлцээг нэмэгдүүлэх\n" +
      "- Sequential layout → Page-in/page-out хурдан\n" +
      "- Deadlock болон fragmentation багасгахад тусална",
    subtitle: "Page Locking & Swap Management",
    backgroundColor: "#9f7aea",
    textColor: "white",
    visualHint: "img20"
  }
];
