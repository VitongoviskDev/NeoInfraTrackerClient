import { FaNetworkWired } from "react-icons/fa";
import { FiDatabase, FiShield } from "react-icons/fi";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { LuLayoutDashboard, LuMapPin } from "react-icons/lu";
import { MdHeadsetMic, MdOutlineInventory2 } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import type { MenuDTO } from "../dto/menuDTO";
import { FaTextSlash } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";

const SideMenuData: MenuDTO[] = [
    {
        name: "Menu",
        items: [
            {
                url: '/',
                label: "Dashboard",
                icon: <LuLayoutDashboard />
            }
        ],
        role: 'ROLE_ANALYST'
    },
    {
        name: "Máquinas",
        items: [
            {
                url: '/machines',
                label: "Máquinas",
                icon: <RiComputerLine />
            }, {
                url: '/mapping',
                label: "Mapeamento",
                icon: <LuMapPin />
            }, {
                url: '/movements',
                label: "Movimentações",
                icon: <HiMiniArrowsRightLeft />
            }
        ],
        role: 'ROLE_ANALYST'
    },
    {
        name: "Ferramentas",
        items: [
            {
                url: '/mover',
                label: "Movimentador",
                icon: <HiMiniArrowsRightLeft />
            },{
                url: '/formatter',
                label: "Formatador",
                icon: <FaTextSlash />
            }, {
                url: '/validator',
                label: "Validador",
                icon: <GrValidate />
            },
        ],
        role: 'ROLE_ANALYST'
    },
    {
        name: "Indicadores",
        items: [
            {
                url: '/indicators',
                label: "Indicadores",
                icon: <VscGraph />
            }
        ],
        role: 'ROLE_ANALYST'
    },
    {
        name: "Inventário",
        items: [
            {
                url: '/lung',
                label: "Pulmão",
                icon: <MdHeadsetMic />
            }, {
                url: '/inventory',
                label: "Inventário",
                icon: <MdOutlineInventory2 />
            }
        ],
        role: 'ROLE_ANALYST'
    },
    {
        name: "Base de Dados",
        items: [
            {
                url: '/basesgh',
                label: "Base SGH",
                icon: <FiDatabase />
            }, {
                url: '/basekaspesky',
                label: "Base Kaspersky",
                icon: <FiShield />
            }
        ],
        role: 'ROLE_ANALYST'
    },
    {
        name: "Gestão",
        items: [
            {
                url: '/demands',
                label: "Demandas",
                icon: <FiDatabase />
            }, {
                url: '/switchvlan',
                label: "SWITCH e VLAN",
                icon: <FaNetworkWired />
            }
        ],
        role: 'ROLE_ANALYST'
    }
    ,
    {
        name: "Administrativo",
        items: [
            {
                url: '/admin/site',
                label: "Site",
                icon: <FiDatabase />
            }, {
                url: '/admin/team',
                label: "Equipe",
                icon: <FaNetworkWired />
            }
        ],
        role: 'ROLE_ADMIN'
    }
]


export default SideMenuData;