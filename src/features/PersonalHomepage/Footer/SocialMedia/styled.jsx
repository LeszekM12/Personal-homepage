import styled from "styled-components";

export const List = styled.ul`
    margin-top: 56px;
    margin-bottom: 0;
    padding: 0;
    display: flex;
    list-style: none;

    @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
        margin-top: 40px;
    }
`;
export const ListItem = styled.li`
    &:not(:last-child) {
        margin-right: 24px;

        @media (max-width: ${({theme}) => theme.breakpoints.phone}) {
            margin-right: 16px;
        }
    }
`;
export const ListItemLink = styled.a`
    color: ${({theme}) => theme.colors.textPrimary};
    transition: color 0.3s;
    
    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;

export const styleIcon = (Icon) => styled(Icon)`
    height: auto;
    
	@media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
		width: 32px;
	}
`;