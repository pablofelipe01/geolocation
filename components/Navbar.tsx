import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from '../styles/Home.module.css';
import Link from "next/link";

const Navbar = () => {
    const address = useAddress();

    return(
        <div className={styles.navContainer}>
            <h3 className={styles.navTitle}>Geolocation NFTs</h3>
            <div style={{ display: "flex", flexDirection: "row"}}>
                {address && (
                    <div style={{ display: "flex", flexDirection: "row", marginRight: "40px"}}>
                        <Link
                            href="/"
                        >
                            <p className={styles.navLink}>Home</p>
                        </Link>
                        <Link
                            href={`/account/${address}`}
                        >
                            <p className={styles.navLink}>My NFTs</p>
                        </Link>
                    </div>
                )}
               <ConnectWallet 
                    theme={"dark"}
                    modalSize={"compact"}
                     welcomeScreen={{
                            img: {
                            src: "https://tokensolutions.mypinata.cloud/ipfs/Qme5nZT3g7b6wUPWDUkZ9FfN8RGDcgRaoMpRy6MXSSuXCK",
                            width: 150,
                            height: 150,
                            },
                        }}
                            modalTitleIconUrl={
                             "https://tokensolutions.mypinata.cloud/ipfs/QmWrVx6BDRzRvkoueRknLt9N8y12FReVsodQK3xXcesWZc"
                         }
                />
            </div>
        </div>
    )
};

export default Navbar;