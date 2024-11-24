declare module 'react-world-flags' {
    interface FlagProps {
        code: string;
        className?: string;
        style?: React.CSSProperties;
    }

    const Flag: React.FC<FlagProps>;

    export default Flag;
}