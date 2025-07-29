import { FaNetworkWired } from "react-icons/fa";
import { FiDatabase, FiShield } from "react-icons/fi";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { LuLayoutDashboard, LuMapPin } from "react-icons/lu";
import { MdHeadsetMic, MdOutlineInventory2 } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import type { MenuDTO } from "../dto/menuDTO";

const SideMenuData: MenuDTO[] = [
    {
        name: "Menu",
        items: [
            {
                url: '/',
                label: "Dashboard",
                icon: <LuLayoutDashboard />
            }
        ]
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
            }, {
                url: '/formatter',
                label: "Formatador",
                icon: <IoIosSearch />
            },
        ]
    },
    {
        name: "Indicadores",
        items: [
            {
                url: '/indicators',
                label: "Indicadores",
                icon: <VscGraph />
            }
        ]
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
        ]
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
        ]
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
        ]
    }
]


export default SideMenuData;