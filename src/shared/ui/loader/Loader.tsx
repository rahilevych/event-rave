import { CSSProperties } from 'react';
import { BeatLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'rgb(146, 86, 155)',
};

type LoaderProps = {
  color?: string;
  size?: number;
};

export const Loader = ({
  color = 'rgb(146, 86, 155)',
  size = 15,
}: LoaderProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
      }}
    >
      <BeatLoader
        color={color}
        loading={true}
        cssOverride={{ ...override, borderColor: color }}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
