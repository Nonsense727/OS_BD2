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
        ['Сул Зай Олох Хурд', 'Удаан', 'Хурдан'],
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
      "- Хэрэв нэг програм буруу ажиллавал, бусад програмд нөлөөлөхгүй.\n" +
      "- Алдаа гарсан ч бусад програмд нөлөөлөхгүй\n" +
      "- Виртуал санах ой нь RAM + Disk (Swap) ашиглаж, RAM хомсдсон ч програм ажиллах боломжийг олгодог.\n" +
      "- Програм бүр өөрийн санах ойтой тул систем нэгэн зэрэг олон програмыг зохион байгуулж ажиллуулж чаддаг",
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
      "Paging нь програмын санах ойг жижиг, нэг хэмжээтэй блок буюу page болгон хуваадаг. Эдгээр page-уудыг RAM дахь frames буюу физик санах ойн жижиг блок-тэй холбож ажиллуулдаг. Ингэснээр програмын санах ой болон RAM хооронд тасралтгүй memory шаардлагагүй болдог.\n" +
      "RAM тасралтгүй байх шаардлагагүй-page бүр хаана ч байж болно, contiguous memory шаардагдахгүй.\n" +
      "Fragmentation багасна-RAM-д зай хэмнэгдэж, internal болон external fragmentation-ыг багасгана.\n" +
      "Том програм RAM-д багтаж ажиллах боломжтой-зарим page-г disk дээр хадгалж, хэрэгтэй үед RAM-д авчирч ашиглах боломжтой.",
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
        ['Virtual Address', 'Програм ашигладаг хийсвэр хаяг, RAM-д бодит байршлыг мэддэггүй, зөвхөн програмын логик хаяг,Виртуал хаяг нь програм бүрт тусдаа, өөрийн page table-ээр дамжиж физик хаяг руу хөрвөх боломжтой.'],
        ['Physical Address', 'RAM дахь жинхэнэ хаяг, зөвхөн OS болон hardware мэднэ,Виртуал хаяг хөрвүүлэгдэж, физик хаяг руу орж програмын өгөгдлийг хадгална.']
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
      "MMU (Memory Management Unit) нь CPU-д байрлах тусгай hardware бөгөөд виртуал хаягийг физик хаягт хөрвүүлэх, page fault илрүүлэх, санах ойн хамгаалалт хангах, мөн TLB ашиглан хөрвүүлэлтийг хурдан болгох үүрэгтэй.",
    backgroundColor: "#f6ad55",
    textColor: "#333",
    visualHint: "img9"
  },

  // Slide 10: Page Table & PTE
  {
    id: 10,
    title: "Page Table & PTE",
    subtitle: "Paging-д мэдээллийн бүтэц",
    layout: 'dual',
    content:
      "Page Table нь виртуал хаягийг физик хаягт хөрвүүлэх хүснэгт бөгөөд PTE (Page Table Entry) нь frame number, valid/invalid бит, read/write/execute эрхүүд, reference болон dirty бит зэрэг page-ийн мэдээллийг хадгалдаг.\n",
    backgroundColor: "#9f7aea",
    textColor: "white",
    visualHint: null
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
  },
  {
    id: 18,
    title: "Page Fault нь виртуал санах ойн үндсэн бүрэлдэхүүн",
    subtitle: "Virtual Memory Foundation",
    content: "Page fault бол виртуал санах ойн системийн ҮНДСЭН механизм! Програм RAM-д байхгүй хуудсыг хүсэхэд CPU interrupt үүсгэж, OS хуудсыг дискээс RAM руу ачаалдаг.",
    points: [
      "📱 Програм → RAM дээрх хуудас хүсэх",
      "⚠️ Хуудас RAM-д БАЙХГҮЙ → Page Fault!",
      "🚨 CPU interrupt → OS handler дуудагдах",
      "💾 Диск → RAM руу хуудас ачаалах",
      "🔄 Page table шинэчлэгдэх",
      "▶️ Програм үргэлжлүүлэх"
    ],
    backgroundColor: "#1a237e",
    textColor: "white",
    animation: "3d-flip",
    icon: "⚡",
    // ADD THESE NEW FIELDS:
    code: `// PAGE FAULT HANDLER - 3D VISUALIZATION
void handle_page_fault_3d() {
    // 1️⃣ CPU INTERRUPT (3D ANIMATION)
    trigger_interrupt_3d();
    
    // 2️⃣ OS HANDLER ACTIVATION
    os_page_fault_handler();
    
    // 3️⃣ DISK → RAM TRANSFER (VISUAL LOADING)
    load_from_disk_with_progress();
    
    // 4️⃣ PAGE TABLE UPDATE (3D ROTATION)
    update_page_table_3d();
}`,
    media: {
      type: "image", // or "video", "gif"
      url: "https://media.geeksforgeeks.org/wp-content/uploads/121-1.png", // ADD YOUR IMAGE URL
      alt: "Page Fault 3D Animation"
    },
    diagram: "3d-flow",
    stats: "90%+ of virtual memory accesses cause page faults"
  },
  {
    id: 19,
    title: "Demand Paging нь RAM-ийг оновчтой ашигладаг",
    subtitle: "RAM Optimization Strategy",
    content: "Demand Paging нь програм эхлэх үед бүх хуудсыг RAM-д ачаалахгүй, зөвхөн ХЭРЭГТЭЙ ҮЕД л ачаалдаг гайхалтай оновчтой стратеги!",
    points: [
      "🚀 Програм эхлэх → ЗӨВХӨН заавал шаардлагатай хуудсууд",
      "🎯 Page fault үүсэх → Шаардлагатай хуудсууд ачаалдаг",
      "💎 RAM хэрэглээ 60-80% БАГАСДАГ",
      "🔄 Олон програм ЗЭРЭГ ажиллах",
      "⚡ Системийн гүйцэтгэл ИЛҮҮ ХУРДАН"
    ],
    backgroundColor: "#004d40",
    textColor: "white",
    animation: "3d-zoom",
    icon: "📊",
    // ADD 3D VISUALIZATION CODE:
    code: `// DEMAND PAGING 3D VISUALIZATION
void demand_paging_3d_visual() {
    // 🎨 3D MEMORY VISUALIZATION
    visualize_memory_3d();
    
    // 📈 REAL-TIME RAM USAGE GRAPH
    show_ram_usage_graph();
    
    // 🔄 LAZY LOADING ANIMATION
    animate_lazy_loading();
    
    // 💾 DISK ACCESS VISUALIZATION
    show_disk_access_pattern();
}`,
    media: {
      type: "video", // ADD YOUR VIDEO LINK
      url: "https://example.com/demand-paging-3d.mp4",
      alt: "Demand Paging 3D Visualization"
    },
    diagram: "3d-comparison",
    stats: "Demand Paging saves 40-60% RAM usage"
  },
  {
    id: 20,
    title: "FIFO энгийн боловч Belady's anomaly гаргадаг",
    subtitle: "First-In-First-Out Algorithm",
    content: "FIFO нь хамгийн ЭНГИЙН алгоритм боловч Belady's anomaly гэдэг асуудалтай! Илүү их RAM-тай ч ИЛҮҮ ОЛОН page fault гардаг гайхалтай феномен!",
    points: [
      "🧮 Queue бүтэц → ЭНГИЙН хэрэгжилт",
      "🔢 Орох дарааллаар гарах",
      "⚠️ Belady's anomaly → Илүү RAM = Илүү олон fault!",
      "📉 Гүйцэтгэл МУУ (20-30% буруу сонголт)",
      "⏱️ Зөвхөн ЯАРАЛТАЙ тохиолдолд ашиглах"
    ],
    backgroundColor: "#bf360c",
    textColor: "white",
    animation: "3d-rotate",
    icon: "🔄",
    // ADD BELADY'S ANOMALY EXAMPLE:
    code: `// BELADY'S ANOMALY - 3D DEMONSTRATION
void belady_anomaly_3d() {
    // 🎯 3 REFERENCE STRING: 1,2,3,4,1,2,5,1,2,3,4,5
    
    // 📦 3 FRAMES (9 page faults)
    visualize_fifo_3d(3, 9);
    
    // 🎯 SAME STRING WITH 4 FRAMES
    // 📦 4 FRAMES (10 page faults - MORE!)
    visualize_fifo_3d(4, 10); // ANOMALY! ⚠️
    
    // 🎨 3D ANIMATION SHOWING THE PROBLEM
    animate_belady_anomaly();
}`,
    media: {
      type: "gif", // ADD ANIMATED GIF
      url: "https://example.com/belady-anomaly.gif",
      alt: "Belady's Anomaly 3D Animation"
    },
    diagram: "3d-anomaly",
    stats: "Belady's anomaly occurs in 15% of cases"
  },
  {
    id: 21,
    title: "LRU хамгийн сайн практик алгоритм",
    subtitle: "Least Recently Used Algorithm",
    content: "LRU нь ХАМГИЙН САЙН практик алгоритм! Хамгийн УДААН ашиглагдаагүй хуудсыг солих зарчимд үндэслэдэг бөгөөд 90% тохиолдолд ОНОВЧТОЙ шийдэл гаргадаг!",
    points: [
      "🏆 90% тохиолдолд ОНОВЧТОЙ",
      "📊 Counter эсвэл stack ашигладаг",
      "🔄 Хандалт бүрт хуудасны байрлал ШИНЭЧЛЭГДДЭГ",
      "✅ Belady's anomaly БАЙХГҮЙ",
      "🚀 Орчин үеийн системд ӨРГӨН хэрэглэгддэг"
    ],
    backgroundColor: "#1b5e20",
    textColor: "white",
    animation: "3d-stack",
    icon: "🥇",
    // ADD 3D STACK VISUALIZATION:
    code: `// LRU STACK - 3D VISUALIZATION
void lru_3d_visualization() {
    // 🎨 3D STACK CREATION
    create_3d_stack();
    
    // 🔄 ACCESS ANIMATION
    animate_page_access();
    
    // 📊 PERFORMANCE METRICS
    show_performance_metrics();
    
    // 🎯 OPTIMALITY DEMONSTRATION
    demonstrate_optimality();
}`,
    media: {
      type: "interactive", // ADD INTERACTIVE 3D
      url: "https://example.com/lru-3d-demo",
      alt: "LRU 3D Interactive Demo"
    },
    diagram: "3d-lru-stack",
    stats: "LRU achieves 85-95% hit rate"
  },
  {
    id: 22,
    title: "Working Set ба WSClock нь thrashing-аас хамгаалдаг",
    subtitle: "Thrashing Prevention System",
    content: "Working Set бол програмын 'ИДЭВХТЭЙ' хуудсуудын олонлог! Thrashing (хэт олон page fault) үед системийн гүйцэтгэлийг ХАМГААЛДАГ гайхалтай механизм!",
    points: [
      "🛡️ Working Set = сүүлийн Δ хугацаанд хандагдсан хуудсууд",
      "⚠️ Thrashing: RAM дутуу → олон page fault → систем УДААН",
      "⏰ WSClock: Working Set + Clock алгоритмын ХОЛИМОГ",
      "🎯 Local replacement стратеги",
      "📈 Програм бүрийн RAM хэрэгцээг ТОГТООХ"
    ],
    backgroundColor: "#4a148c",
    textColor: "white",
    animation: "3d-clock",
    icon: "🛡️",
    // ADD 3D CLOCK VISUALIZATION:
    code: `// WSClock 3D SIMULATION
void wsclock_3d_simulation() {
    // 🎨 3D CLOCK CREATION
    create_3d_clock();
    
    // 🔄 HAND ROTATION ANIMATION
    animate_clock_hand();
    
    // 📊 WORKING SET VISUALIZATION
    visualize_working_set();
    
    // 🛡️ THRASHING PREVENTION DEMO
    demonstrate_thrashing_prevention();
}`,
    media: {
      type: "embed", // EMBED 3D MODEL
      url: "https://example.com/wsclock-3d-model",
      alt: "WSClock 3D Model"
    },
    diagram: "3d-clock-model",
    stats: "Prevents thrashing in 95% of cases"
  },
  {
    id: 23,
    title: "Орчин үеийн Linux kernel нь 'Clock + LRU + Working Set' холимог арга ашигладаг",
    subtitle: "Modern Linux Kernel Strategy",
    content: "Linux kernel нь олон алгоритмын ДАВУУ ТАЛУУДЫГ НЭГТГЭСНЭ! Clock-ын хурд, LRU-ын оновчтой байдал, Working Set-ийн хамгаалалтыг НЭГДГЭЭН гайхалтай стратеги!",
    points: [
      "⚡ Clock алгоритм: ХУРДАН, энгийн",
      "📊 LRU мэдээлэл: Хуудасны түүх",
      "🛡️ Working Set: Идэвхтэй хуудсуудыг хамгаалах",
      "🎚️ Swappiness параметр: Swap хэрэглээг тохируулах",
      "🎨 Active/Inactive хуудсыг ЯЛГАХ"
    ],
    backgroundColor: "#263238",
    textColor: "white",
    animation: "3d-hybrid",
    icon: "🐧",
    // ADD LINUX 3D VISUALIZATION:
    code: `// LINUX KERNEL 3D VISUALIZATION
void linux_kernel_3d() {
    // 🎨 HYBRID ALGORITHM VISUALIZATION
    visualize_hybrid_algorithm();
    
    // 🔄 REAL-TIME DECISION MAKING
    show_decision_process();
    
    // 📊 PERFORMANCE COMPARISON
    compare_performance();
    
    // 🚀 FUTURE OPTIMIZATIONS
    show_future_optimizations();
}`,
    media: {
      type: "video",
      url: "https://example.com/linux-memory-3d.mp4", // ADD LINUX VIDEO
      alt: "Linux Memory Management 3D"
    },
    diagram: "3d-linux-hybrid",
    stats: "Linux achieves 99%+ memory efficiency"
  }

];
