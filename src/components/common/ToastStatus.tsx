import { useToast, Wrap } from "@chakra-ui/react";

interface ToastStatusProps {
    isError: boolean;
}

export default function ToastStatus({isError}: ToastStatusProps) {
  const toast = useToast();

  return (
    <Wrap>
      {isError && toast({
        title: `Error toast`,
        status: "error",
        isClosable: true,
      })}
    </Wrap>
  );
}
