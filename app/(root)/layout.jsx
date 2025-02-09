import Player from "@/components/cards/player";
import MusicProvider from "@/components/music-provider";
import Header from "@/components/page/header";
import Search from "@/components/page/search";

export default function RootLayout({ children }) {
    return (
        <main>
            <Header />
            <MusicProvider>
                {children}
                <Player />
            </MusicProvider>
           
        </main>
    )
}