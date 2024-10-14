import React, { useEffect } from "react";
import { Modal, ActivityIndicator } from "react-native";
import * as S from "./TransitionLoading.style";

const TransitionLoading = ({ visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <Modal transparent visible={visible}>
      <S.Overlay>
        <ActivityIndicator size="large" color="#fff" />
      </S.Overlay>
    </Modal>
  );
};

export default TransitionLoading;
