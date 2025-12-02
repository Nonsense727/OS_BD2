
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
    visualHint: null // Table-д зураг шаардлагагүй
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
    backgroundColor: "#319795", // Teal
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
      "Best Fit: Хамгийн бага илүүдэл үлдээх зайг сонгоно. (Жижиг цоорхой үүсэх эрсдэлтэй).\n" +
      "Worst Fit: Хамгийн **том** сул зайг сонгоно. (Үлдсэн зай нь ашиглагдах боломжтой).\n" +
      "Эдгээр нь Linked List-д суурилсан хуваарилалтын стратегиуд юм.",
    backgroundColor: "#9f7aea",
    textColor: "white",
    visualHint: "img5"
  }
];


