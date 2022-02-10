import { useCallback } from 'react';
import { useIntl } from 'react-intl';

const useFormatMessage = () => {
  const { formatMessage } = useIntl();

  return useCallback(
    (id, values) => {
      const message = formatMessage({ id }, values);
      return message;
    },
    [formatMessage],
  );
};

export default useFormatMessage;
