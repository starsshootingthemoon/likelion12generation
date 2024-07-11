import { BiLeaf } from "react-icons/bi";
import { BiCamera } from "react-icons/bi";
import { BiCaretRightCircle } from "react-icons/bi";
import { BiAlbum } from "react-icons/bi";
import { BiTrip } from "react-icons/bi";


import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "KitKat!",
        icon: <BiLeaf />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <BiCamera />,
        src: "/today"
    },
    {
        title: "추천 브이로거",
        icon: <BiCaretRightCircle />,
        src: "/vloger"
    },
    {
        title: "playlist",
        icon: <BiAlbum />,
        src: "/playlist"
    },
    {
        title: "일본 여행",
        icon: <BiAlbum />,
        src: "/japan"
    }
];

export const searchKeyword = [
    {
        title: "Kitkat",
        src: "/search/kitkat"
    },
    {
        title: "오타쿠",
        src: "/search/otaku"
    },
    {
        title: "일본",
        src: "/search/japan"
    },
    {
        title: "도쿄 여행",
        src: "/search/tokyotrip"
    },
    {
        title: "アニメーション",
        src: "/search/animation"
    },
    {
        title: "성신여대",
        src: "/search/sungshin"
    },
    {
        title: "플레이리스트",
        src: "/search/playlist"
    },
    {
        title: "呪術回転",
        src: "/search/animation"
    },
    {
        title: "ハイキュー!",
        src: "/search/hiku"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/starsshootingthemoon/likelion12generation",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/channel/UCidMD4ncZemvBeLDGaRCv4w",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://summeryseason.tistory.com/",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/_4ever.millennium/'",
        icon: <AiOutlineInstagram />
    },
]
