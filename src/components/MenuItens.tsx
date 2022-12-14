import { useEffect, useState } from "react"
import { NavigateFunction } from "react-router-dom";

type Props = {
    navigate: NavigateFunction;
    currentTab: string;
}

export const GlItens = ({ navigate, currentTab }: Props) => {

    let [active, setActive] = useState<number>(0);

    useEffect(() => {

        function setCurrentTab() {

            switch (currentTab) {
                case 'DashBoard':
                    setActive(1);
                    break;
                case 'Pedidos':
                    setActive(2);
                    break;
                case 'Garagem':
                    setActive(3);
                    break;
                case 'Motoristas':
                    setActive(4);;
                    break;
            }

        }

        setCurrentTab()

    }, [])


    function switchActive(type: number) {

        setActive(type);

        switch (type) {
            case 1:
                navigate("/gl/dashboard");
                break;
            case 2:
                navigate("/gl/pedidos");
                break;
            case 3:
                navigate("/gl/garagem");
                break;
            case 4:
                navigate("/gl/motoristas");
                break;
        }

    }

    return (
        <>
            <li className={"menu-item" + (active == 1 ? " active" : "")} onClick={() => { switchActive(1); }}>
                <div className="item-icon">
                    <svg fill="#8f8f8f" viewBox="0 0 30 30" width="20px" height="20px">
                        <path
                            d="M 4 2 C 3.448 2 3 2.448 3 3 L 3 24 C 3 26.209 4.791 28 7 28 L 22 28 L 23 28 L 24 28 C 26.209 28 28 26.209 28 24 L 28 10 C 28 9.448 27.552 9 27 9 L 25 9 L 25 24 C 25 24.553 24.552 25 24 25 C 23.448 25 23 24.553 23 24 L 23 3 C 23 2.448 22.552 2 22 2 L 4 2 z M 6 6 L 20 6 L 20 9 L 6 9 L 6 6 z M 6 13 L 12 13 L 12 15 L 6 15 L 6 13 z M 14 13 L 20 13 L 20 15 L 14 15 L 14 13 z M 6 17 L 12 17 L 12 19 L 6 19 L 6 17 z M 14 17 L 20 17 L 20 19 L 14 19 L 14 17 z M 6 21 L 12 21 L 12 23 L 6 23 L 6 21 z M 14 21 L 20 21 L 20 23 L 14 23 L 14 21 z" />
                    </svg>
                </div>
                <div className="item-desc">DashBoard</div>
            </li>
            <li className={"menu-item" + (active == 2 ? " active" : "")} onClick={() => { switchActive(2) }}>
                <div className="item-icon">
                    <svg fill="#8f8f8f" viewBox="0 0 30 30" width="20px" height="20px">
                        <path
                            d="M 4 2 C 3.448 2 3 2.448 3 3 L 3 24 C 3 26.209 4.791 28 7 28 L 22 28 L 23 28 L 24 28 C 26.209 28 28 26.209 28 24 L 28 10 C 28 9.448 27.552 9 27 9 L 25 9 L 25 24 C 25 24.553 24.552 25 24 25 C 23.448 25 23 24.553 23 24 L 23 3 C 23 2.448 22.552 2 22 2 L 4 2 z M 6 6 L 20 6 L 20 9 L 6 9 L 6 6 z M 6 13 L 12 13 L 12 15 L 6 15 L 6 13 z M 14 13 L 20 13 L 20 15 L 14 15 L 14 13 z M 6 17 L 12 17 L 12 19 L 6 19 L 6 17 z M 14 17 L 20 17 L 20 19 L 14 19 L 14 17 z M 6 21 L 12 21 L 12 23 L 6 23 L 6 21 z M 14 21 L 20 21 L 20 23 L 14 23 L 14 21 z" />
                    </svg>
                </div>
                <div className="item-desc">Pedidos</div>
            </li>
            <li className={"menu-item" + (active == 3 ? " active" : "")} onClick={() => { switchActive(3) }}>
                <div className="item-icon">
                    <svg fill="#8f8f8f" viewBox="0 0 30 30" width="20px" height="20px">
                        <path
                            d="M 4 2 C 3.448 2 3 2.448 3 3 L 3 24 C 3 26.209 4.791 28 7 28 L 22 28 L 23 28 L 24 28 C 26.209 28 28 26.209 28 24 L 28 10 C 28 9.448 27.552 9 27 9 L 25 9 L 25 24 C 25 24.553 24.552 25 24 25 C 23.448 25 23 24.553 23 24 L 23 3 C 23 2.448 22.552 2 22 2 L 4 2 z M 6 6 L 20 6 L 20 9 L 6 9 L 6 6 z M 6 13 L 12 13 L 12 15 L 6 15 L 6 13 z M 14 13 L 20 13 L 20 15 L 14 15 L 14 13 z M 6 17 L 12 17 L 12 19 L 6 19 L 6 17 z M 14 17 L 20 17 L 20 19 L 14 19 L 14 17 z M 6 21 L 12 21 L 12 23 L 6 23 L 6 21 z M 14 21 L 20 21 L 20 23 L 14 23 L 14 21 z" />
                    </svg>
                </div>
                <div className="item-desc">Garagem</div>
            </li>
            <li className={"menu-item" + (active == 4 ? " active" : "")} onClick={() => { switchActive(4) }}>
                <div className="item-icon">
                    <svg fill="#8f8f8f" viewBox="0 0 30 30" width="20px" height="20px">
                        <path
                            d="M 4 2 C 3.448 2 3 2.448 3 3 L 3 24 C 3 26.209 4.791 28 7 28 L 22 28 L 23 28 L 24 28 C 26.209 28 28 26.209 28 24 L 28 10 C 28 9.448 27.552 9 27 9 L 25 9 L 25 24 C 25 24.553 24.552 25 24 25 C 23.448 25 23 24.553 23 24 L 23 3 C 23 2.448 22.552 2 22 2 L 4 2 z M 6 6 L 20 6 L 20 9 L 6 9 L 6 6 z M 6 13 L 12 13 L 12 15 L 6 15 L 6 13 z M 14 13 L 20 13 L 20 15 L 14 15 L 14 13 z M 6 17 L 12 17 L 12 19 L 6 19 L 6 17 z M 14 17 L 20 17 L 20 19 L 14 19 L 14 17 z M 6 21 L 12 21 L 12 23 L 6 23 L 6 21 z M 14 21 L 20 21 L 20 23 L 14 23 L 14 21 z" />
                    </svg>
                </div>
                <div className="item-desc">Motoristas</div>
            </li>
        </>
    )

}