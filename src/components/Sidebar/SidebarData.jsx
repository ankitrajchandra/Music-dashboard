import { AiFillHome } from "react-icons/ai"
import { BiLibrary } from "react-icons/bi"
import { AiFillPlusSquare } from "react-icons/ai"
import { MdFavorite } from "react-icons/md"
import { AiFillLike } from "react-icons/ai"


export const upperSidebarData = [
    {
        title: "Home",
        icon: <AiFillHome style={{ scale: "1.7" }} />
    },
    {
        title: "Library",
        icon: <BiLibrary style={{ scale: "1.7" }} />
    },
    {
        title: "Create Playlist",
        icon: <AiFillPlusSquare style={{ scale: "1.7" }} />
    }
]

export const lowerSidebarData = [
    {
        title: "Favorites",
        icon: <MdFavorite style={{ scale: "1.7" }} />
    },
    {
        title: "Liked Songs",
        icon: <AiFillLike style={{ scale: "1.7" }} />
    }
]