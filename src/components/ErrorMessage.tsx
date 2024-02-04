interface ErrorMessageProps {
  errorMsg: string;
}

export function ErrorMessage({ errorMsg }: ErrorMessageProps) {
  return <p className="text-red-500">{errorMsg}</p>;
}
