import { Dialog, DialogProps, styled } from "@mui/material";

export const DialogWrapper = styled(Dialog)<DialogProps>`
    .custom-dialog-paper {
        width: 100%;

        .dialog-head {
            padding: 20px;
        }
    }
`;