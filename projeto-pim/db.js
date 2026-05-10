const meusProdutos = [
    {
        id: "1",
        nome: "Gigabyte Aorus Master 16",
        preco: 55000.00,
        descricao: "O gigabyte aorus master 16 é o modelo gamer que possui processador intel core ultra 9 - 185h, placa de vídeo rtx 5090 da nvidia, tela 16 - wqxga, além de ssd 2tb nvme, memórias de 32gb ddr5 5600mhz e windows 11 home de 64bits. Veja a seguir os dados técnicos completos:",
        imagens: [
            "imgs/aorus.webp", 
            "imgs/Gigabyte-Aorus-Master-16-Intel-Core-Ultra-9-275hx-RTX-5090-Tela-16-Wqxga-SSD-2TB-Nvme-Ram-32gb_1743769855.webp",
            "imgs/Gigabyte-Aorus-Master-16-Intel-Core-Ultra-9-275hx-RTX-5090-Tela-16-Wqxga-SSD-2TB-Nvme-Ram-32gb_1743769856.webp"
        ],
        specs: {
            tela: "16 polegadas wqxga",
            cpu: "intel core ultra 9",
            cores: "16 núcleos",
            gpu: "nvidia rtx 5090"
        },
        
        caracteristicas: [
            "intel core ultra 9 185h de 5.1ghz (turbo) com 16 núcleos e cache 24mb",
            "tela de 16 polegadas wqxga (2560 x 1600) de 165hz - matte 100% srgb",
            "placa gráfica nvidia rtx 5090 - 16gb gddr7 dedicada",
            "ssd 2tb padrão pcie nvme (m.2-2280 até 7000mb/s)",
            "ram de 32gb ddr5 5600mhz - expansível até 64gb (2 slots)",
            "windows 11 home de 64bits em português"
        ]
    },
    {
        id: "2",
        nome: "Razer Blade 16",
        preco: 33000.00,
        descricao: "O Razer Blade 16 combina ultra-portabilidade com potência máxima, apresentando o processador AMD Ryzen 9 e a nova arquitetura de vídeo da NVIDIA para gamers exigentes. Confira os detalhes:",
        imagens: [
            "imgs/Razer-Blade-16.webp",
            "imgs/Razer-Blade-16-Amd-Ryzen-Ai-9-Hx-365-RTX-5060-Tela-16-Qhd-SSD-4TB-Nvme-Ram-16gb_1770929926.webp",
            "imgs/Razer-Blade-16-Amd-Ryzen-Ai-9-Hx-365-RTX-5060-Tela-16-Qhd-SSD-4TB-Nvme-Ram-16gb_1770929927.webp"
        ],
        specs: {
            tela: "14 polegadas qhd+",
            cpu: "amd ryzen 9 8945hs",
            cores: "8 núcleos",
            gpu: "nvidia rtx 4070"
        },
        caracteristicas: [
            "amd ryzen ai 9 hx 365 de 5ghz (turbo) c/10 núcleos e cachê 24mb",
            "tela de 16 polegadas qhd+ (2560 x 1600p) de 240hz · matte oled",
            "placa gráfica nvidia rtx 5060 · 8gb gddr7 dedicada",
            "ssd 4tb padrão pcie nvme (m.2-2280 até 5000mbps)",
            "ram de 16gb lpddr5x-7500 · expansível até 64gb (onboard)",
            "windows 11 pro de 64bits em português"

        ]
    },
    {
        id: "3",
        nome: "Asus ROG Zephyrus G16",
        preco: 26000.00,
        descricao: "Design sofisticado e tela OLED de tirar o fôlego. O Zephyrus G16 é a escolha ideal para criadores de conteúdo e gamers que buscam fidelidade visual absoluta.",
        imagens: [
            "imgs/Asus.webp",
            "imgs/Asus-Rog-Zephyrus-G16-Intel-Core-Ultra-9-285h-RTX-5070-Tela-16-Wqxga-SSD-1TB-Nvme-Ram-16gb_1770929913.webp",
            "imgs/Asus-Rog-Zephyrus-G16-Intel-Core-Ultra-9-285h-RTX-5070-Tela-16-Wqxga-SSD-1TB-Nvme-Ram-16gb_1770929914.webp"
        ],
        specs: {
            tela: "16 polegadas oled",
            cpu: "intel core ultra 7",
            cores: "16 núcleos",
            gpu: "nvidia rtx 4060"
        },
        caracteristicas: [
            "intel core ultra 7 155h com inteligência artificial integrada",
            "tela oled de 16 polegadas 2.5k (240hz) com validação pantone",
            "placa gráfica nvidia rtx 4060 com tgp de 100w",
            "ssd 1tb m.2 nvme ultra rápido",
            "ram de 16gb lpddr5x integradas de baixa latência",
            "sistema de som com 6 alto-falantes e dolby atmos"
        ]
    },
    {

        id: "4",
        nome: "Lenovo Thinkpad P16v",
        preco: 28000.00,
        descricao: "O Lenovo Thinkpad P16v é um notebook profissional com design elegante e desempenho impressionante, ideal para profissionais que precisam de poder de processamento e qualidade de imagem.",
        imagens: [
            "imgs/Lenovo-Thinkpad-P16v.webp",
            "imgs/q1p9wlhqbad7gj7m6nff8f0aqa3qk4951798.avif",
            "imgs/oqi9p1fi5vaovi6hd5zi7ya8ctrfpe646184.avif"
        ],
        specs: {
            tela: "16 polegadas wqxga",
            cpu: "intel core ultra 9",
            cores: "16 núcleos",
            gpu: "nvidia rtx 5070"
        },
        caracteristicas: [
            "intel core ultra 9 285h com 16 núcleos e cache 24mb",
            "tela de 16 polegadas wqxga (2560 x 1600) de 165hz - matte 100% srgb",
            "placa gráfica nvidia rtx 5070 - 8gb gddr7 dedicada",
            "ssd 1tb padrão pcie nvme (m.2-2280 até 7000mb/s)",
            "ram de 32gb ddr5 5600mhz - expansível até 64gb (2 slots)",
            "windows 11 pro de 64bits em português"
        ]
    },
    {
        id: "5",
        nome: "Msi Stealth 16 Ai",
        preco: 41000.00,
        descricao: "O notebook msi é uma excelente escolha para gamers e profissionais que buscam desempenho e qualidade de imagem.",
        imagens: [
            "imgs/Msi-Stealth-16.webp",
            "imgs/Msi-Stealth-16-Ai-Amd-Ryzen-Ai-9-Hx-370-RTX-5080-Tela-16-Qhd-SSD-1TB-Nvme-Ram-32gb_1770929925.webp",
            "imgs/Msi-Stealth-16-Ai-Amd-Ryzen-Ai-9-Hx-370-RTX-5080-Tela-16-Qhd-SSD-1TB-Nvme-Ram-32gb_1770929926.webp"
        ],
        specs: {
            tela: "16 polegadas wqxga",
            cpu: "intel core ultra 9",
            cores: "16 núcleos",
            gpu: "nvidia rtx 5070"
        },
        caracteristicas: [
            "intel core ultra 9 285h com 16 núcleos e cache 24mb",
            "tela de 16 polegadas wqxga (2560 x 1600) de 165hz - matte 100% srgb",
            "placa gráfica nvidia rtx 5070 - 8gb gddr7 dedicada",
            "ssd 1tb padrão pcie nvme (m.2-2280 até 7000mb/s)",
            "ram de 32gb ddr5 5600mhz - expansível até 64gb (2 slots)",
            "windows 11 pro de 64bits em português"
        ]
    },
    {
    
       id: "6",
       nome: "acer predator helios 16",
       preco: 35000.00,
       descricao: "O notebook acer predator helios 16 é uma excelente escolha para gamers e profissionais que buscam desempenho e qualidade de imagem.",
       imagens: [
           "imgs/Notebook-Acer-Predator-Phn16.webp",
           "imgs/51Li4MBCFHL._AC_SL1000_.jpg",
           "imgs/41KM8SCBD7L._AC_SX679_.jpg"
    ],
    specs: {
        tela: "16 polegadas wqxga",
        cpu: "intel core ultra 9",
        cores: "16 núcleos",
        gpu: "nvidia rtx 5070"
    },
    caracteristicas: [
        "intel core ultra 9 285h com 16 núcleos e cache 24mb",
        "tela de 16 polegadas wqxga (2560 x 1600) de 165hz - matte 100% srgb",
        "placa gráfica nvidia rtx 5070 - 8gb gddr7 dedicada",
        "ssd 1tb padrão pcie nvme (m.2-2280 até 7000mb/s)",
        "ram de 32gb ddr5 5600mhz - expansível até 64gb (2 slots)",
        "windows 11 pro de 64bits em português"
    ]
    },
    {
    
       id: "7",
       nome: "Lenovo ThinkPad X9 15 Aura Edition",
       preco: 38000.00,
       descricao: "O notebook lenovo thinkpad x9 15 aura edition é uma excelente escolha para profissionais que buscam desempenho e qualidade de imagem.",
       imagens: [
           "imgs/Lenovo-Thinkpad-X9-15.webp",
           "imgs/nqmg9dqz0xf1vsqzpzft007co582ec439211.avif",
           "imgs/d9im8456htkmewn1ntuw0mi3tgncg5214080.avif"
        ],
        specs: {
            tela: "16 polegadas wqxga",
            cpu: "intel core ultra 9",
            cores: "16 núcleos",
            gpu: "nvidia rtx 5070"
        },
        caracteristicas: [
            "intel core ultra 9 285h com 16 núcleos e cache 24mb",
            "tela de 16 polegadas wqxga (2560 x 1600) de 165hz - matte 100% srgb",
            "placa gráfica nvidia rtx 5070 - 8gb gddr7 dedicada",
            "ssd 1tb padrão pcie nvme (m.2-2280 até 7000mb/s)",
            "ram de 32gb ddr5 5600mhz - expansível até 64gb (2 slots)",
            "windows 11 pro de 64bits em português"
        ]
    },
    {
    
       id: "8",
       nome: "Notebook Gamer Predator Helios 18 AI",
       preco: 42000.00,
       descricao: "O notebook gamer predator helios 18 ai é uma excelente escolha para profissionais que buscam desempenho e qualidade de imagem.",
       imagens: [
           "imgs/Notebook-Predator-Helios-18.webp",
           "imgs/166074-1200-auto.webp",
           "imgs/166117-1200-auto.webp"
        ],
        specs: {
            tela: "16 polegadas wqxga",
            cpu: "intel core ultra 9",
            cores: "16 núcleos",
            gpu: "nvidia rtx 5070"
        },
        caracteristicas: [
            "intel core ultra 9 285h com 16 núcleos e cache 24mb",
            "tela de 16 polegadas wqxga (2560 x 1600) de 165hz - matte 100% srgb",
            "placa gráfica nvidia rtx 5070 - 8gb gddr7 dedicada",
            "ssd 1tb padrão pcie nvme (m.2-2280 até 7000mb/s)",
            "ram de 32gb ddr5 5600mhz - expansível até 64gb (2 slots)",
            "windows 11 pro de 64bits em português"
        ]
    },
    {
    
       id: "9",
       nome: "MacBook Pro Apple 16",
       preco: 45000.00,
       descricao: "MacBook Pro Apple 16 - Desempenho Extremo com o Chip M5 Max.",
       imagens: [
           "imgs/macbook-pro-apple-16.webp",
           "imgs/macbook-pro-apple-16-chip-m5-max-cpu-18-nucleos-gpu-40-nucleos-48gb-ssd-2tb-prateado-mge94bz-a_1774867871_gg.webp",
           "imgs/macbook-pro-apple-16-chip-m5-max-cpu-18-nucleos-gpu-40-nucleos-48gb-ssd-2tb-prateado-mge94bz-a_1774867872_gg.webp"
        ],
        specs: {
            tela: "Tela Liquid Retina XDR de 16.2 polegadas com ProMotion 120Hz",
            cpu: "CPU de 18 núcleos (6 supernúcleos e 12 de desempenho)",
            cores: "18 núcleos",
            gpu: "GPU de 40 núcleos"
        },
        caracteristicas: [
            "Performance de Elite: Equipado com o chip M5 Max, apresentando uma CPU de 18 núcleos e uma massiva GPU de 40 núcleos para tarefas ultra-exigentes.",
            "Memória e Largura de Banda: Conta com 48GB de memória unificada e uma impressionante largura de banda de 614 GB/s.",
            "Visual XDR Revolucionário: Tela Liquid Retina XDR de 16,2 polegadas com brilho de até 1.600 nits e tecnologia ProMotion de 120 Hz.",
            "Conectividade de Próxima Geração: Inclui três portas Thunderbolt 5 com transferências de até 120 Gb/s e suporte a Wi-Fi 7.",
            "Armazenamento e Autonomia: Equipado com 2TB de SSD e bateria de longa duração para até 20 horas de streaming de vídeo."
        ]
    },
    {
        id: "10",
        nome: "Notebook Gamer Asus Rog Strix Scar 18",
        preco: 48000.00,
        descricao: "O novo notebook gamer rog strix scar 18 entrega desempenho extremo nos mais exigentes jogos, aplicativos de streaming e softwares de criação, com processador intel core ultra 9 275hx e placa de vídeo nvidia geforce rtx 5090. A refrigeração inteligente rog mantém as temperaturas sob controle mesmo em tarefas intensas, ao aplicar metal líquido na cpu e gpu. Já a tela rog nebula hdr garante imersão total, enquanto o inédito design simplificado permite upgrades rápidos de ram e ssd sem ferramentas.",
        imagens: [
            "imgs/Notebook-Gamer-Asus-Rog-Strix-Scar-18.webp",
            "imgs/Notebook-Gamer-Asus-Rog-Strix-Scar-18-Intel-Core-Ultra-9-275hx-64GB-RAM-Nvidia-RTX5090-SSD-4TB-Tela-18-240Hz-Windows-11-Home-Black-G835lx_1755889506.webp",
            "imgs/Notebook-Gamer-Asus-Rog-Strix-Scar-18-Intel-Core-Ultra-9-275hx-64GB-RAM-Nvidia-RTX5090-SSD-4TB-Tela-18-240Hz-Windows-11-Home-Black-G835lx_1755889507.webp"
        ],
        specs: {
            tela: '18" Mini LED 240Hz',
            cpu: "Core Ultra 9 275HX",
            cores: "24 Cores / 24 Threads",
            gpu: "RTX 5090 (24GB GDDR7)",
            telaFull: '18" ROG Nebula HDR Mini LED QHD+ (2560x1600) 240Hz 3ms',
            cpuFull: "Intel Core Ultra 9 275HX (Até 5.4 GHz com NPU para IA)",
            gpuFull: "NVIDIA GeForce RTX 5090 Laptop 24GB GDDR7 (TGP de até 175W)",
            armazenamento: "SSD de 4TB NVMe PCIe 4.0 (Configurado em RAID 0 de alta velocidade)",
            ram: "64GB DDR5 5600MHz (Dual Channel)",
            os: "Windows 11 Home"
        },
        caracteristicas: [  
            "Desempenho Extremo: Equipado com o processador Intel Core Ultra 9 275HX e a placa de vídeo NVIDIA GeForce RTX 5090, garantindo desempenho excepcional para jogos e tarefas intensas.",
            "Refrigeração Inteligente ROG: Mantém as temperaturas sob controle mesmo durante as sessões de jogo mais intensas, graças à aplicação de metal líquido na CPU e GPU.",
            "Tela ROG Nebula HDR: Proporciona uma experiência visual imersiva com uma tela Mini LED de 18 polegadas, resolução QHD+ e taxa de atualização de 240Hz.",
            "Design Simplificado para Upgrades: Permite upgrades rápidos de RAM e SSD sem a necessidade de ferramentas, facilitando a personalização do notebook.",
            "Armazenamento de Alta Velocidade: Equipado com um SSD de 4TB NVMe PCIe 4.0 configurado em RAID 0 para velocidades de leitura e gravação ultrarrápidas.",
            "Memória Ampla: Conta com 64GB de RAM DDR5 a 5600MHz em configuração Dual Channel, garantindo multitarefa fluida e desempenho consistente.",
            "Sistema Operacional Atualizado: Vem com Windows 11 Home pré-instalado, oferecendo a mais recente experiência de usuário da Microsoft."
        ]
    }
];  