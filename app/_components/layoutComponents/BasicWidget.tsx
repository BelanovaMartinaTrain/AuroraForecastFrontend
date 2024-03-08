import { ReactNode } from "react";

type widgetProps = {
    className: string;
    children: ReactNode;
};

export default function BasicWidget({ className, children }: widgetProps) {
    return (
        <>
            <div className={className}>{children}</div>
        </>
    );
}
