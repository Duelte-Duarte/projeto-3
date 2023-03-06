import styled from "styled-components";
import { MdMenu, MdColorLens, MdChatBubble, MdVisibility, MdShare, MdSupervisorAccount, MdPerson, MdNotifications, MdCheckCircle, MdComputer } from "react-icons/md";

const Container = styled.div`
    margin: auto;
    display: flex;
    background-color: #F1F1F1;
`;

const Header = styled.div`

`;

const Nav = styled.div`
    background-color: black;
    color: white;
    position: fixed;
    overflow: hidden;
    width: 100%;

    .menu {
        float: left;
        display: flex;
        flex-direction: row-reverse;
        padding: 10px;
        font-size: 1.2em;
        cursor: pointer;
    }

    svg {
        padding: 0px 5px 0px 0px;
    }

    .logo {
        float: right;
        display: block;
        padding: 10px;
        font-size: 1.2em;
    }
`;

const Main = styled.div`
    margin: 80px 15px;
    width: 100%;

    .section1 {
        display: flex;
        font-size: 1.2em;
    }

    .section2 {
        color: white;
        padding: 30px 15px;
        font-size: 1.2em;
        display: flex;
        justify-content: space-between;

        svg{
            display: block;
        }
    }

    .phrase {
        font-size: 1.2em;
    }

    img {
        width: 100%;
    }

    .table {
        font-style: italic;
        margin: 15px 0px;
    }

    #table_1 {
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 10px;
        height: 40px;
    }

    #table_2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 10px;
        height: 40px;
    }
`;

export function Page1 () {
    return (
        <Container>
            <Header>
                <Nav>
                    <div className="menu">Menu<MdMenu size={26} /></div>
                    <div className="logo">Logo</div>
                </Nav>
            </Header>

            <Main>
                <div className="section1"><MdColorLens size={26} /><strong>My Dashboard</strong></div>
                <br />
                <div className="section2" style={{backgroundColor: '#F44336'}}> <div><MdChatBubble size={50} />Messages </div> <div>52</div></div>
                <div className="section2" style={{backgroundColor: '#2196F3'}}> <div><MdVisibility size={50} />Views </div> <div>99</div></div>
                <div className="section2" style={{backgroundColor: '#009688'}}> <div><MdShare size={50} />Shares </div> <div>23</div></div>
                <div className="section2" style={{backgroundColor: '#FF9800'}}> <div><MdSupervisorAccount size={50} />Users </div> <div>50</div></div>
                <br/>
                <div className="section3">
                    <div className="phrase">Regions</div>
                    <br/>
                    <img src="https://www.w3schools.com/w3images/region.jpg"></img>
                    <div className="phrase">Feeds</div>
                    <div className="table">
                        <div id="table_1"> 
                            <MdPerson size={22} color="blue"/>
                            <p>New record, over 90 views.</p>
                            <p>10 mins</p>
                        </div>
                        <div id="table_2"> 
                            <MdNotifications size={22} color="#F44336"/>
                            <p>Database error.</p>
                            <p>15 mins</p>
                        </div>
                        <div id="table_1"> 
                            <MdSupervisorAccount size={22} color="#D3C025"/>
                            <p>New record, over 40 users.</p>
                            <p>17 mins</p>
                        </div>
                        <div id="table_2"> 
                            <MdChatBubble size={22} color="#F44336"/>
                            <p>New comments.</p>
                            <p>25 mins</p>
                        </div>
                        <div id="table_1"> 
                            <MdCheckCircle size={22} color="#blue"/>
                            <p>Check transactions.</p>
                            <p>28 mins</p>
                        </div>
                        <div id="table_2"> 
                            <MdComputer size={22} color="#F44336"/>
                            <p>CPU overload.</p>
                            <p>35 mins</p>
                        </div>
                        <div id="table_1"> 
                            <MdShare size={22} color="#4CAF50"/>
                            <p>New shares.</p>
                            <p>39 mins</p>
                        </div>
                    </div>
                </div>
            </Main>
        </Container>
    )
};