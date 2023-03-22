import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    display: flex;
    background-color: #F1F1F1;
`;

export const Header = styled.div`

`;

export const Body = styled.div`
    display: flex;
    width: 100%;
`;

export const Br = styled.div`
    height: 1px;
    margin-top: 10px;
    background-color: #F1F1F1;
`;

export const Menu = styled.div`
    height: 100vh;
    width: 300px;
    background-color: white;
    position: fixed;
    margin-top: 47px;
    display: ${props => props.toggleMenu ? 'block' : 'none'};

    .welcome {
        display: flex;
    }

    svg {
        padding-left: 20px;
        
    }

    div img {
        border-radius: 50%;
        height: 50px;
        width: 50px;
        margin: 20px 40px 20px 20px;
    }

    h4 {
        font-weight: normal;
        margin-bottom: 10px;
    }

    .phrase {
        font-size: 1.2em;
        padding: 20px 0px 10px 20px;
    }

    .menubox1, .menubox2 {
        background-color: #2196F3;
        width: 100%;
        height: 40px;
        color: white;
        display: flex;
        align-items: center;

        svg {
            margin-right: -10px;
        }
    }

    .menubox2 {
        background-color: white;
        color: black;
    }

    p {
        padding: 10px 20px;
    }

    @media screen and (min-width: 992px){
        display: block;
    }

    .menubox1:hover, .menubox2:hover {
        background-color: #CCCCCC;
        color: black;
        cursor: pointer;
    }
`;

export const Nav = styled.div`
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

    @media screen and (min-width: 992px){
        .menu {
            display: none;
        }
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

export const Main = styled.div`
    margin: 80px 15px;
    width: 100%;

    @media screen and (min-width: 992px) {
        margin-left: 310px;
    }

    @media screen and (min-width: 600px){
            .mainsection {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }

            .section2 {
                width: 100%;
                margin: 7px;
            }

            .section3 {
                display: flex;
                flex-direction: row;
            }

            .mainsectionbox1 {
                width: 50vw;
            }

            .mainsectionbox2 {
                width: 100%;
                padding-left: 15px;
            }

            .mainsection2 {
                display: flex;
                align-items: center;
            }

            .phrase-box {
                margin-left: 40px;
            }
        }

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
        margin: 20px 0px;
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

    .porcent {
        background-color: #9E9E9E;
        height: 40px;
        color: white;
        text-align: center;
    }

    .box1 {
        background-color: #4CAF50;
        width: 25%;
        height: 100%;
    }

    .box2 {
        background-color: #FF9800;
        width: 50%;
        height: 100%;
    }

    .box3 {
        background-color: #F44336;
        width: 75%;
        height: 100%;
    }

    .square1, .square2 {
        box-shadow: 0px 0px 1px black;
        background-color: white;
        align-items: center;
        display: flex;
        height: 40px;
        justify-content: space-between;
        padding: 0px 25% 0px 10px;
    }

    .square2 {
        background-color: #F1F1F1;
    }

    .square1:hover, .square2:hover {
        background-color: #CCCCCC;
    }

    .buttom {
        color: white;
        font-weight: bolder;
        background-color: #616161;
        align-items: center;
        display: flex;
        padding: 10px;
        width: 150px;
        justify-content: center;
        font-weight: normal;

        svg {
            padding: 0px 5px;
        }
    }

    .buttom:hover {
        cursor: pointer;
        background-color: #CCCCCC;
        color: black;

        svg {
            color: black;
        }
    }

    .bloco {
        box-shadow: 0px 0px 4px black;
        background-color: white;
    }

    .bloco-box {
        display: flex;
        align-items: center;
        box-shadow: 0px 0px .5px black;

        h2 {
            font-weight: normal;
        }

        img{
            border-radius: 50%;
            width: 40px;
            height: 40px;
            padding: 20px;
        }
    }

    #img3 {
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

    .phrase-box {
        padding: 0px 20px;

        .phrase2 {
            display: flex;
            align-items: center;
        }

        h3, h4 {
            padding: 0px 5px 0px 0px;
            font-weight: normal;
        }
    }
`;

export const Content = styled.div`

    background-color: #616161;
    margin: 0px -15px;
    color: white;
    padding: 30px;

    @media screen and (min-width: 600px){

        .content {
            display: flex;
            justify-content: space-around;
        }
        .contentsection {
            width: 100%;
            margin-left: 20px;
        }
    }

    .contentsection {
        h3, h4 {
            font-weight: normal;
        }
    
        .green {
            background-color: #4CAF50;
            height: 5px;
            margin-top: -15px;
        }
    
        .red {
            background-color: #F44336;
            height: 5px;
            margin-top: -15px;
        }
    
        .orange {
            background-color: #FF9800;
            height: 5px;
            margin-top: -15px;
        }
    }
`;

export const Footer = styled.div`

    h2 {
        font-weight: normal;
    }
`;