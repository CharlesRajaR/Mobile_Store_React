import styled from 'styled-components';

export const ButtonContainer = styled.button`

border-color:
border-color:${
    props => props.$cart?"var(--mainYellow)":"var(--lightBlue)"
};
color:${
    props => props.$cart?"var(--mainYellow)":"var(--lightBlue)"
};
&:hover{
    background:${props => props.$cart
        ?"var(--mainYellow)":"var(--lightBlue)"
};
}

text-transform:uppercase;
border-color:var(--lightBlue);
background:transparent;
font-size:1.4rem;
color:var(--lightBlue);
cursor:pointer;
padding:0.8rem 0.5rem;
border-radius:0.5rem;
margin:0.2rem 0.5rem 0.2rem 0rem;
transition:auto 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue);
    color:var(--mainBlue);
}
&:focus{
    outline:none;
}
`;



export const NavWrapper = styled.nav`
 text-transform:capitalize;
 .nav-link{
    color:var(--mainWhite);
    font-size:2.3rem;
    &:hover{
    // background:skyblue;
    color:skyblue;
}
 }

`;