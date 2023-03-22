import { Container, Header, Body, Br, Menu, Nav, Main, Content, Footer} from './styles'
import { MdMenu, MdColorLens, MdChatBubble, MdVisibility, MdShare, MdSupervisorAccount, MdPerson, MdNotifications, MdCheckCircle, MdComputer, MdArrowForward, MdEmail, MdSettings, MdOutlineRemoveRedEye, MdGroups, MdOutlineAlbum, MdAccountBalance, MdHistory, MdSettingsSuggest } from "react-icons/md";
import { BiDiamond } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { useState } from 'react';


export function Page1 () {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <Container>
            <Header>
                <Nav>
                    <div onClick={() => setToggleMenu(!toggleMenu)} className="menu">Menu<MdMenu size={26} /></div>
                    <div className="logo">Logo</div>
                </Nav>
            </Header>

            <Body>
                <Menu toggleMenu={toggleMenu}>
                    <div className='welcome'>
                        <div>
                            <img src='https://www.w3schools.com/w3images/avatar2.png' />
                        </div>
                        <div>
                            <h4>Welcome, <strong>Mike</strong></h4>
                            <div className='icons'>
                                <MdEmail size={18}/>
                                <MdPerson size={18}/>
                                <MdSettings size={18}/>
                            </div>
                        </div>
                    </div>
                    <Br />
                    <div>
                        <div className="phrase">Dashboard</div>
                        <div className='menubox1'>
                            <MdGroups size={20} />
                            <p>Overview</p>
                        </div>
                        <div className='menubox2'>
                            <MdOutlineRemoveRedEye size={20} />
                            <p>Views</p>
                        </div>
                        <div className='menubox2'>
                            <MdGroups size={20} />
                            <p>Traffic</p>
                        </div>
                        <div className='menubox2'>
                            <MdOutlineAlbum size={20} />
                            <p>Geo</p>
                        </div>
                        <div className='menubox2'>
                            <BiDiamond size={20} />
                            <p>Orders</p>
                        </div>
                        <div className='menubox2'>
                            <GoBell size={20} />
                            <p>News</p>
                        </div>
                        <div className='menubox2'>
                            <MdAccountBalance size={20} />
                            <p>General</p>
                        </div>
                        <div className='menubox2'>
                            <MdHistory size={20} />
                            <p>History</p>
                        </div>
                        <div className='menubox2'>
                            <MdSettingsSuggest size={20} />
                            <p>Settings</p>
                        </div>
                    </div>
                </Menu>
                <Main>
                    <div className="section1"><MdColorLens size={26} /><strong>My Dashboard</strong></div>
                    <br />
                    <div className='mainsection'>
                        <div className="section2" style={{backgroundColor: '#F44336'}}> <div><MdChatBubble size={50} />Messages </div> <div>52</div></div>
                        <div className="section2" style={{backgroundColor: '#2196F3'}}> <div><MdVisibility size={50} />Views </div> <div>99</div></div>
                        <div className="section2" style={{backgroundColor: '#009688'}}> <div><MdShare size={50} />Shares </div> <div>23</div></div>
                        <div className="section2" style={{backgroundColor: '#FF9800'}}> <div><MdSupervisorAccount size={50} />Users </div> <div>50</div></div>
                    </div>
                    <br/>
                    <div className="section3">
                        <div className='mainsectionbox1'>
                            <div className="phrase">Regions</div>
                            <br/>
                            <img src="https://www.w3schools.com/w3images/region.jpg"></img>
                        </div>
                        <div className='mainsectionbox2'>
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
                    </div>
                    <br/>
                    <div>
                        <div className="phrase">General Stats</div>
                        <br/>
                        <div>New Visitors</div>
                        <br/>
                        <div className="porcent"><div className="box1">25%</div></div>
                        <br/>
                        <div>New Users</div>
                        <br/>
                        <div className="porcent"><div className="box2">50%</div></div>
                        <br/>
                        <div>Bounce Rate</div>
                        <br/>
                        <div className="porcent"><div className="box3">75%</div></div>
                        <br/>
                    </div>
                    <br/>
                    <div>
                        <div className="phrase">Countries</div>
                        <br/>
                        <div className="square">
                            <div className="square1">
                                <p>United States</p>
                                <p>65%</p>
                            </div>
                            <div className="square2">
                                <p>UK</p>
                                <p>15.7%</p>
                            </div>
                            <div className="square1">
                                <p>Russia</p>
                                <p>5.6%</p>
                            </div>
                            <div className="square2">
                                <p>Spain</p>
                                <p>2.1%</p>
                            </div>
                            <div className="square1">
                                <p>India</p>
                                <p>1.9%</p>
                            </div>
                            <div className="square2">
                                <p>France</p>
                                <p>1.5%</p>
                            </div>
                        </div>
                        <br/>
                        <div className="buttom">
                            More Countries <MdArrowForward />
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <div className="phrase">Recent Users</div>
                        <br/>
                        <div className="bloco">
                            <div className="bloco-box">
                                <img src="https://www.w3schools.com/w3images/avatar2.png" /> <h2>Mike</h2>
                            </div>
                            <div className="bloco-box">
                                <img src="https://www.w3schools.com/w3images/avatar5.png" /> <h2>Jill</h2>
                            </div>
                            <div className="bloco-box">
                                <img src="https://www.w3schools.com/w3images/avatar6.png" /> <h2>Jane</h2>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <div className="phrase">Recent Comments</div>
                        <br/>
                        <div className='mainsection2'>
                            <img id='img3' src="https://www.w3schools.com/w3images/avatar3.png"/>
                            <br/>
                            <div className="phrase-box">
                                <div className="phrase2">
                                    <h3>John</h3> <h4 style={{color: '#606060'}}>Sep 29, 2014, 9:12 PM</h4>
                                </div>
                                <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <br/>
                        <div className='mainsection2'>
                            <img id='img3' src="https://www.w3schools.com/w3images/avatar1.png"/>
                            <br/>
                            <div className="phrase-box">
                                <div className="phrase2">
                                    <h3>Bo </h3> <h4 style={{color: '#606060'}}>Sep 28, 2014, 10:15 PM</h4>
                                </div>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <Content>
                        <div className='content'>
                            <div className='contentsection'>
                                <h3>Demographic</h3>
                                <div className="green"/>
                                <h4>Language</h4>
                                <h4>Country</h4>
                                <h4>City</h4>
                            </div>
                            <br/>
                            <div className='contentsection'>
                                <h3>System</h3>
                                <div className="red"/>
                                <h4>Browser</h4>
                                <h4>OS</h4>
                                <h4>More</h4>
                            </div>
                            <br/>
                            <div className='contentsection'>
                                <h3>Target</h3>
                                <div className="orange"/>
                                <h4>Users</h4>
                                <h4>Active</h4>
                                <h4>Geo</h4>
                                <h4>Interests</h4>
                            </div>
                        </div>
                    </Content>
                    <Footer>
                        <h2>FOOTER</h2>
                        <p>Powered by <u>w3.css</u></p>
                    </Footer>
                </Main>
            </Body>
        </Container>
    )
};