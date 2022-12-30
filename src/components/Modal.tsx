import React, { FC } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  isOpen: boolean;
  title: string;
  handleClose: () => void;
  content: JSX.Element;
  colorTitle?: string;
}

export const Modal: FC<ModalProps> = ({ isOpen, title, colorTitle, handleClose, content }: ModalProps) => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={isOpen}
      fullScreen={downSm}
      onClose={handleClose}
      sx={{ "& .MuiDialog-paper": { borderRadius: downSm ? "0px" : "9px" } }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{ position: "absolute", top: "0", right: "0", display: "block" }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle
        display="flex"
        justifyContent="center"
        textAlign="center"
        color={colorTitle}
        marginX="1rem"
        marginY={downSm ? "32px" : "16px"}
      >
        {title}
      </DialogTitle>
      <DialogContent sx={{ display: "flex", alignItems: "center", flexDirection: downSm ? "column" : "row" }}>
        {content}
      </DialogContent>
    </Dialog>
  );
};

Modal.defaultProps = {
  colorTitle: "#000000",
};
