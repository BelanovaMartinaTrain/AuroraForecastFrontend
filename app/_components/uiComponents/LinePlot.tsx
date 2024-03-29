import * as d3 from "d3";
import styles from "../../_styles/styles.module.css";
import SVGLines from "../subComponents/SvgLines";

export default function LinePlot({ data }: { data: number[] }) {
    const width = 722;
    const height = 72;
    const marginTop = 15;
    const marginRight = 0;
    const marginBottom = 25;
    const marginLeft = 0;
    const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
    const y = d3.scaleLinear(d3.extent(data) as unknown as Iterable<number>, [
        height - marginBottom,
        marginTop,
    ]);
    // const x2 = d3.scaleLinear([0, data2.length - 1], [marginLeft, width - marginRight]);
    // const y2 = d3.scaleLinear(d3.extent(data2) as unknown as Iterable<number>, [
    //     height - marginBottom,
    //     marginTop,
    // ]);
    const line = d3.line((d, i) => x(i), y).curve(d3.curveCatmullRom.alpha(0.5));
    //const line2 = d3.line((d, i) => x2(i), y2).curve(d3.curveCatmullRom.alpha(0.5));

    return (
        <>
            <svg width={width} height={height}>
                <path
                    fill="none"
                    stroke="springGreen"
                    strokeWidth="1.5"
                    d={line(data) as unknown as string}
                />
                <g fill="springGreen" stroke="springGreen" strokeWidth="1.5">
                    {data.map((d, i) => (
                        <circle key={i} cx={x(i)} cy={y(d)} r="1.5" />
                    ))}
                </g>
            </svg>

            <svg width="782" height="391" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0, 84.86)">
                    <g transform="translate(30 0)">
                        <text className={styles.dayLabel} x="0" y="12" dy="0.35em">
                            Tue. 26 Mar.
                        </text>

                        <text className={styles.dayLabel} x="153.86885245901638" y="12" dy="0.35em">
                            Wed. 27 Mar.
                        </text>

                        <text className={styles.dayLabel} x="437.9344262295082" y="12" dy="0.35em">
                            Thur. 28 Mar.
                        </text>
                    </g>

                    <g transform="translate(30 24)">
                        <text
                            className={styles.hourLabel}
                            x="11.836065573770492"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            12
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="35.50819672131148"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            14
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="59.18032786885245"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            16
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="82.85245901639344"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            18
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="106.52459016393442"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            20
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="130.19672131147541"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            22
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="153.86885245901638"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            00
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="177.54098360655738"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            02
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="201.21311475409834"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            04
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="224.88524590163937"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            06
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="248.55737704918033"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            08
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="272.22950819672127"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            10
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="295.9016393442623"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            12
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="319.57377049180326"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            14
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="343.24590163934425"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            16
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="366.91803278688525"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            18
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="390.59016393442624"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            20
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="414.2622950819672"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            22
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="437.9344262295082"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            00
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="461.6065573770492"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            02
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="485.27868852459017"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            04
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="508.95081967213116"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            06
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="532.6229508196722"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            08
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="556.295081967213"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            10
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="579.9672131147541"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            12
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="603.6393442622951"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            14
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="627.311475409836"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            16
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="650.983606557377"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            18
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="674.655737704918"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            20
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="698.327868852459"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            22
                        </text>

                        <text
                            className={styles.hourLabel}
                            x="722"
                            y="9"
                            dy="0.35em"
                            textAnchor="middle"
                        >
                            00
                        </text>
                    </g>

                    <g transform="translate(30 48)">
                        <line
                            x1="0"
                            x2="722"
                            y1="120"
                            y2="120"
                            stroke="#374759"
                            strokeDasharray=""
                        />

                        <line
                            x1="0"
                            x2="722"
                            y1="108"
                            y2="108"
                            stroke="#374759"
                            strokeDasharray=""
                        />

                        <line x1="0" x2="722" y1="96" y2="96" stroke="#374759" strokeDasharray="" />

                        <line x1="0" x2="722" y1="84" y2="84" stroke="#374759" strokeDasharray="" />

                        <line x1="0" x2="722" y1="72" y2="72" stroke="#374759" strokeDasharray="" />

                        <line x1="0" x2="722" y1="60" y2="60" stroke="#374759" strokeDasharray="" />

                        <line x1="0" x2="722" y1="48" y2="48" stroke="#374759" strokeDasharray="" />

                        <line
                            x1="0"
                            x2="722"
                            y1="36.00000000000001"
                            y2="36.00000000000001"
                            stroke="#374759"
                            strokeDasharray=""
                        />

                        <line
                            x1="0"
                            x2="722"
                            y1="23.999999999999993"
                            y2="23.999999999999993"
                            stroke="#374759"
                            strokeDasharray=""
                        />

                        <line
                            x1="0"
                            x2="722"
                            y1="11.999999999999996"
                            y2="11.999999999999996"
                            stroke="#374759"
                            strokeDasharray=""
                        />

                        <line x1="0" x2="722" y1="0" y2="0" stroke="#374759" strokeDasharray="" />

                        <line x1="0" x2="0" y1="0" y2="120" stroke="#374759" />

                        <line
                            x1="11.836065573770492"
                            x2="11.836065573770492"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="23.672131147540984"
                            x2="23.672131147540984"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="35.50819672131148"
                            x2="35.50819672131148"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="47.34426229508197"
                            x2="47.34426229508197"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="59.18032786885245"
                            x2="59.18032786885245"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="71.01639344262296"
                            x2="71.01639344262296"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="82.85245901639344"
                            x2="82.85245901639344"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="94.68852459016394"
                            x2="94.68852459016394"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="106.52459016393442"
                            x2="106.52459016393442"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="118.3606557377049"
                            x2="118.3606557377049"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="130.19672131147541"
                            x2="130.19672131147541"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="142.0327868852459"
                            x2="142.0327868852459"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="153.86885245901638"
                            x2="153.86885245901638"
                            y1="0"
                            y2="120"
                            stroke="#c3d0d8"
                        />

                        <line
                            x1="165.70491803278688"
                            x2="165.70491803278688"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="177.54098360655738"
                            x2="177.54098360655738"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="189.37704918032787"
                            x2="189.37704918032787"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="201.21311475409834"
                            x2="201.21311475409834"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="213.04918032786884"
                            x2="213.04918032786884"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="224.88524590163937"
                            x2="224.88524590163937"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="236.7213114754098"
                            x2="236.7213114754098"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="248.55737704918033"
                            x2="248.55737704918033"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="260.39344262295083"
                            x2="260.39344262295083"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="272.22950819672127"
                            x2="272.22950819672127"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="284.0655737704918"
                            x2="284.0655737704918"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="295.9016393442623"
                            x2="295.9016393442623"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="307.73770491803276"
                            x2="307.73770491803276"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="319.57377049180326"
                            x2="319.57377049180326"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="331.40983606557376"
                            x2="331.40983606557376"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="343.24590163934425"
                            x2="343.24590163934425"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="355.08196721311475"
                            x2="355.08196721311475"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="366.91803278688525"
                            x2="366.91803278688525"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="378.75409836065575"
                            x2="378.75409836065575"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="390.59016393442624"
                            x2="390.59016393442624"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="402.4262295081967"
                            x2="402.4262295081967"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="414.2622950819672"
                            x2="414.2622950819672"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="426.0983606557377"
                            x2="426.0983606557377"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="437.9344262295082"
                            x2="437.9344262295082"
                            y1="0"
                            y2="120"
                            stroke="#c3d0d8"
                        />

                        <line
                            x1="449.77049180327873"
                            x2="449.77049180327873"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="461.6065573770492"
                            x2="461.6065573770492"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="473.4426229508196"
                            x2="473.4426229508196"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="485.27868852459017"
                            x2="485.27868852459017"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="497.11475409836066"
                            x2="497.11475409836066"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="508.95081967213116"
                            x2="508.95081967213116"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="520.7868852459017"
                            x2="520.7868852459017"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="532.6229508196722"
                            x2="532.6229508196722"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="544.4590163934425"
                            x2="544.4590163934425"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="556.295081967213"
                            x2="556.295081967213"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="568.1311475409836"
                            x2="568.1311475409836"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="579.9672131147541"
                            x2="579.9672131147541"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="591.8032786885246"
                            x2="591.8032786885246"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="603.6393442622951"
                            x2="603.6393442622951"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="615.4754098360655"
                            x2="615.4754098360655"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="627.311475409836"
                            x2="627.311475409836"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="639.1475409836065"
                            x2="639.1475409836065"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="650.983606557377"
                            x2="650.983606557377"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="662.8196721311475"
                            x2="662.8196721311475"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="674.655737704918"
                            x2="674.655737704918"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="686.4918032786885"
                            x2="686.4918032786885"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="698.327868852459"
                            x2="698.327868852459"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line
                            x1="710.1639344262295"
                            x2="710.1639344262295"
                            y1="0"
                            y2="120"
                            stroke="#374759"
                        />

                        <line x1="722" x2="722" y1="0" y2="120" stroke="#c3d0d8" />

                        <g
                            transform="translate(-17, -6) scale(0.5)"
                            filter="invert(70%) sepia(8%) saturate(388%) hue-rotate(192deg) brightness(95%) contrast(85%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle cx="12" cy="18" r="1.25" stroke="white" strokeWidth="1.5" />
                                <path
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    d="M12 17V8m0-5a3 3 0 0 0-3 3v9.354a4 4 0 1 0 6 0V6a3 3 0 0 0-3-3z"
                                />
                            </svg>
                        </g>

                        <text
                            className={styles.yAxisLabel}
                            x="-5"
                            y="23.999999999999993"
                            dy="0.35em"
                            textAnchor="end"
                        >
                            22°
                        </text>

                        <text
                            className={styles.yAxisLabel}
                            x="-5"
                            y="48"
                            dy="0.35em"
                            textAnchor="end"
                        >
                            18°
                        </text>

                        <text
                            className={styles.yAxisLabel}
                            x="-5"
                            y="72"
                            dy="0.35em"
                            textAnchor="end"
                        >
                            14°
                        </text>

                        <text
                            className={styles.yAxisLabel}
                            x="-5"
                            y="96"
                            dy="0.35em"
                            textAnchor="end"
                        >
                            10°
                        </text>

                        <text
                            className={styles.yAxisLabel}
                            x="-5"
                            y="120"
                            dy="0.35em"
                            textAnchor="end"
                        >
                            6°
                        </text>

                        <g
                            transform="translate(727, -6) scale(0.5)"
                            filter="invert(70%) sepia(8%) saturate(388%) hue-rotate(192deg) brightness(95%) contrast(85%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M2.04 12l-.747-.06.748.06zm19.92 0l.747-.06-.748.06zm-6.546 10.086l-.53-.53.53.53zm-2.828 0l-.53.53.53-.53zM2.788 12.062C3.221 6.78 7.235 2.75 12 2.75v-1.5c-5.668 0-10.221 4.757-10.707 10.69l1.495.122zM12 2.75c4.765 0 8.78 4.03 9.212 9.312l1.495-.123C22.22 6.007 17.668 1.25 12 1.25v1.5zm9 9.5H3v1.5h18v-1.5zm-19.707-.31c-.084 1.027.758 1.81 1.707 1.81v-1.5a.231.231 0 0 1-.166-.067.15.15 0 0 1-.046-.121l-1.495-.123zm19.919.122a.15.15 0 0 1-.046.121.231.231 0 0 1-.166.067v1.5c.949 0 1.79-.783 1.707-1.81l-1.495.122zM11.25 13v7.672h1.5V13h-1.5zm4.694 9.616l.586-.586-1.06-1.06-.586.585 1.06 1.061zm-3.889 0a2.75 2.75 0 0 0 3.89 0l-1.061-1.06a1.25 1.25 0 0 1-1.768 0l-1.06 1.06zm-.805-1.944c0 .729.29 1.428.805 1.944l1.061-1.06a1.25 1.25 0 0 1-.366-.884h-1.5z"
                                />
                            </svg>
                        </g>

                        <text
                            className={styles.yAxisLabel}
                            x="727"
                            y="23.999999999999993"
                            dy="0.35em"
                            textAnchor="start"
                        >
                            8
                        </text>

                        <text
                            className={styles.yAxisLabel}
                            x="727"
                            y="48"
                            dy="0.35em"
                            textAnchor="start"
                        >
                            6
                        </text>

                        <text
                            className={styles.yAxisLabel}
                            x="727"
                            y="72"
                            dy="0.35em"
                            textAnchor="start"
                        >
                            4
                        </text>

                        <text
                            className={styles.yAxisLabel}
                            x="727"
                            y="96"
                            dy="0.35em"
                            textAnchor="start"
                        >
                            2
                        </text>

                        <text
                            className={styles.yAxisLabel}
                            x="727"
                            y="120"
                            dy="0.35em"
                            textAnchor="start"
                        >
                            0
                        </text>

                        <rect
                            x="0.5"
                            y="120"
                            width="10.836065573770492"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="12.336065573770492"
                            y="120"
                            width="10.836065573770492"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="24.172131147540984"
                            y="120"
                            width="10.83606557377049"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="36.00819672131148"
                            y="120"
                            width="10.836065573770496"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="47.84426229508197"
                            y="120"
                            width="10.836065573770496"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="59.68032786885245"
                            y="120"
                            width="10.836065573770496"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="71.51639344262296"
                            y="120"
                            width="10.836065573770496"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="83.35245901639344"
                            y="120"
                            width="10.836065573770496"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="95.18852459016394"
                            y="120"
                            width="10.836065573770485"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="107.02459016393442"
                            y="120"
                            width="10.836065573770485"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="118.8606557377049"
                            y="120"
                            width="10.836065573770485"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="130.69672131147541"
                            y="120"
                            width="10.836065573770485"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="142.5327868852459"
                            y="120"
                            width="10.836065573770485"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="154.36885245901638"
                            y="120"
                            width="10.836065573770485"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="166.20491803278688"
                            y="120"
                            width="10.836065573770485"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="178.04098360655738"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="189.87704918032787"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="201.71311475409834"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="213.54918032786884"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="225.38524590163937"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="237.2213114754098"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="249.05737704918033"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="260.89344262295083"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="272.72950819672127"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="284.5655737704918"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="296.4016393442623"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="308.23770491803276"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="320.07377049180326"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="331.90983606557376"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="343.74590163934425"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="355.58196721311475"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="367.41803278688525"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="379.25409836065575"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="391.09016393442624"
                            y="111.60000000000001"
                            width="10.836065573770504"
                            height="8.399999999999999"
                            fill="#00b8f1"
                        />

                        <rect
                            x="402.9262295081967"
                            y="116.39999999999999"
                            width="10.836065573770504"
                            height="3.5999999999999996"
                            fill="#00b8f1"
                        />

                        <rect
                            x="414.7622950819672"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="426.5983606557377"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="438.4344262295082"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="450.27049180327873"
                            y="115.19999999999999"
                            width="10.836065573770504"
                            height="4.8"
                            fill="#00b8f1"
                        />

                        <rect
                            x="462.1065573770492"
                            y="117.6"
                            width="10.836065573770504"
                            height="2.4"
                            fill="#00b8f1"
                        />

                        <rect
                            x="473.9426229508196"
                            y="117.6"
                            width="10.836065573770504"
                            height="2.4"
                            fill="#00b8f1"
                        />

                        <rect
                            x="485.77868852459017"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="497.61475409836066"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="509.45081967213116"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="521.2868852459017"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="533.1229508196722"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="544.9590163934425"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="556.795081967213"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="568.6311475409836"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="580.4672131147541"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="592.3032786885246"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="604.1393442622951"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="615.9754098360655"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="627.811475409836"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="639.6475409836065"
                            y="118.8"
                            width="10.836065573770504"
                            height="1.2"
                            fill="#00b8f1"
                        />

                        <rect
                            x="651.483606557377"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="663.3196721311475"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="675.155737704918"
                            y="116.39999999999999"
                            width="10.836065573770504"
                            height="3.5999999999999996"
                            fill="#00b8f1"
                        />

                        <rect
                            x="686.9918032786885"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="698.827868852459"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <rect
                            x="710.6639344262295"
                            y="120"
                            width="10.836065573770504"
                            height="0"
                            fill="#00b8f1"
                        />

                        <defs>
                            <linearGradient
                                id="temperature-curve-gradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="120"
                                gradientUnits="userSpaceOnUse"
                                spreadMethod="pad"
                            >
                                <stop offset="130%" stopColor="#ff2d3f" />
                                <stop offset="130%" stopColor="#00b8f1" />

                                <stop offset="100%" stopColor="#00b8f1" />
                            </linearGradient>
                        </defs>

                        <path
                            d="M0 76.8C1.9726775956284153, 75.49999999999999, 7.890710382513663, 71.10000000000001, 11.836065573770492, 69C15.781420765027322, 66.89999999999999, 19.726775956284154, 65.3, 23.672131147540984, 64.19999999999999C27.617486338797818, 63.09999999999999, 31.56284153005465, 62.5, 35.50819672131148, 62.400000000000006C39.45355191256831, 62.30000000000001, 43.398907103825145, 63.1, 47.34426229508197, 63.6C51.28961748633879, 64.10000000000001, 55.234972677595614, 64.00000000000001, 59.18032786885245, 65.4C63.12568306010928, 66.8, 67.07103825136612, 69.5, 71.01639344262296, 72C74.9617486338798, 74.5, 78.90710382513662, 78.10000000000001, 82.85245901639344, 80.4C86.79781420765028, 82.7, 90.74316939890711, 83.9, 94.68852459016394, 85.80000000000001C98.63387978142077, 87.7, 102.57923497267761, 90.3, 106.52459016393442, 91.8C110.46994535519123, 93.3, 114.41530054644807, 93.7, 118.3606557377049, 94.80000000000001C122.30601092896173, 95.90000000000002, 126.25136612021856, 97.30000000000001, 130.19672131147541, 98.4C134.14207650273227, 99.50000000000001, 138.0874316939891, 100.39999999999999, 142.0327868852459, 101.39999999999999C145.97814207650273, 102.39999999999999, 149.9234972677596, 103.40000000000002, 153.86885245901638, 104.4C157.8142076502732, 105.40000000000002, 161.75956284153006, 106.40000000000002, 165.70491803278688, 107.4C169.65027322404373, 108.40000000000002, 173.59562841530055, 109.7, 177.54098360655738, 110.4C181.48633879781423, 111.10000000000002, 185.43169398907105, 111.39999999999998, 189.37704918032787, 111.6C193.32240437158472, 111.8, 197.26775956284155, 111.49999999999999, 201.21311475409834, 111.6C205.15846994535517, 111.69999999999999, 209.10382513661202, 112.10000000000001, 213.04918032786884, 112.2C216.99453551912566, 112.30000000000001, 220.93989071038257, 113.40000000000002, 224.88524590163937, 112.2C228.83060109289616, 111, 232.77595628415295, 108, 236.7213114754098, 105C240.66666666666663, 102, 244.61202185792345, 98.09999999999998, 248.55737704918033, 94.19999999999999C252.5027322404372, 90.3, 256.448087431694, 84.69999999999999, 260.39344262295083, 81.6C264.3387978142077, 78.5, 268.28415300546436, 77.59999999999998, 272.22950819672127, 75.6C276.1748633879781, 73.60000000000001, 280.120218579235, 71.59999999999998, 284.0655737704918, 69.6C288.0109289617487, 67.60000000000001, 291.9562841530055, 65.50000000000001, 295.9016393442623, 63.6C299.8469945355191, 61.699999999999996, 303.7923497267759, 59, 307.73770491803276, 58.199999999999996C311.6830601092896, 57.4, 315.6284153005464, 59.19999999999999, 319.57377049180326, 58.8C323.51912568306005, 58.4, 327.46448087431696, 56.70000000000002, 331.40983606557376, 55.80000000000001C335.3551912568306, 54.900000000000006, 339.30054644808746, 53.4, 343.24590163934425, 53.39999999999999C347.1912568306011, 53.4, 351.1366120218579, 54.30000000000001, 355.08196721311475, 55.80000000000001C359.02732240437155, 57.30000000000001, 362.97267759562834, 60.400000000000006, 366.91803278688525, 62.400000000000006C370.8633879781421, 64.4, 374.80874316939895, 66.60000000000001, 378.75409836065575, 67.80000000000001C382.69945355191254, 69.00000000000001, 386.64480874316945, 68.8, 390.59016393442624, 69.6C394.5355191256831, 70.39999999999999, 398.48087431693983, 71.59999999999998, 402.4262295081967, 72.6C406.3715846994535, 73.60000000000001, 410.3169398907103, 74.59999999999998, 414.2622950819672, 75.6C418.20765027322403, 76.60000000000001, 422.1530054644809, 78.30000000000001, 426.0983606557377, 78.60000000000001C430.0437158469945, 78.89999999999999, 433.9890710382513, 78, 437.9344262295082, 77.4C441.8797814207651, 76.8, 445.8251366120219, 74.7, 449.77049180327873, 75C453.71584699453564, 75.3, 457.66120218579243, 77.49999999999999, 461.6065573770492, 79.19999999999999C465.551912568306, 80.89999999999999, 469.4972677595628, 82.79999999999997, 473.4426229508196, 85.19999999999999C477.3879781420764, 87.59999999999998, 481.3333333333333, 91.19999999999999, 485.27868852459017, 93.60000000000001C489.2240437158471, 96, 493.1693989071038, 98.69999999999999, 497.11475409836066, 99.6C501.0601092896175, 100.49999999999999, 505.00546448087425, 99.5, 508.95081967213116, 99C512.896174863388, 98.5, 516.8415300546449, 97.69999999999999, 520.7868852459017, 96.6C524.7322404371585, 95.49999999999999, 528.6775956284154, 93.70000000000003, 532.6229508196722, 92.4C536.5683060109291, 91.10000000000001, 540.5136612021856, 91.09999999999998, 544.4590163934425, 88.8C548.4043715846993, 86.5, 552.3497267759562, 81.39999999999999, 556.295081967213, 78.60000000000001C560.2404371584698, 75.8, 564.1857923497267, 74.4, 568.1311475409836, 72C572.0765027322406, 69.6, 576.0218579234974, 66.39999999999999, 579.9672131147541, 64.19999999999999C583.9125683060109, 61.99999999999999, 587.8579234972678, 60.29999999999999, 591.8032786885246, 58.8C595.7486338797816, 57.29999999999999, 599.6939890710383, 57.1, 603.6393442622951, 55.199999999999996C607.5846994535519, 53.29999999999999, 611.5300546448087, 46.9, 615.4754098360655, 47.39999999999999C619.4207650273223, 47.9, 623.3661202185791, 53.599999999999994, 627.311475409836, 58.199999999999996C631.2568306010929, 62.800000000000004, 635.2021857923496, 70.7, 639.1475409836065, 75C643.0928961748633, 79.3, 647.0382513661201, 81.8, 650.983606557377, 84C654.9289617486338, 86.2, 658.8743169398907, 86.90000000000002, 662.8196721311475, 88.2C666.7650273224043, 89.5, 670.7103825136612, 90.39999999999999, 674.655737704918, 91.8C678.6010928961749, 93.19999999999999, 682.5464480874316, 95.59999999999998, 686.4918032786885, 96.6C690.4371584699453, 97.59999999999998, 694.3825136612022, 97.50000000000001, 698.327868852459, 97.80000000000001C702.2732240437159, 98.10000000000001, 706.2185792349727, 98.2, 710.1639344262295, 98.4C714.1092896174864, 98.60000000000002, 720.0273224043716, 98.89999999999999, 722, 99"
                            fill="none"
                            stroke="url(#temperature-curve-gradient)"
                            strokeWidth="2"
                        />

                        <svg x="11.672131147540984" y="33.959999999999994" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#03d__03d__a)">
                                    <path
                                        fill="url(#03d__03d__b)"
                                        fillRule="evenodd"
                                        d="M52.315 18.517l1.757-2.457-11.356 1.224L43.872 5.86l-9.248 6.732L30 2.12l-4.624 10.472L16.06 5.86l1.224 11.356L5.86 16.06l6.732 9.248L2.12 30l10.472 4.624L5.86 43.94l.57-.061c.369-.441.759-.868 1.17-1.279 3.5-3.6 8.1-5.7 13.1-6 2.7-3.9 7.2-6.2 12.1-6.2h1.1c4.363-6.14 11.011-10.453 18.415-11.883z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#FFD348"
                                        fillRule="evenodd"
                                        d="M14.867 37.83A20.01 20.01 0 0120.7 36.6c2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.679 29.679 0 0110.672-9.21c-4.775-7.863-15.023-10.525-23.082-5.956-7.87 4.565-10.725 14.6-6.623 22.597z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03d__03d__c)"
                                        fillRule="evenodd"
                                        d="M17.565 37.034c1.022-.224 2.07-.37 3.135-.434 2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.635 29.635 0 018.287-7.849c-4.026-6.562-12.633-8.81-19.328-4.927-6.765 3.923-9.155 12.626-5.294 19.41z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03d__03d__d)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#03d__03d__e)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="03d__03d__c"
                                        x1="20.817"
                                        x2="39.177"
                                        y1="19.057"
                                        y2="40.937"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FFAF22" />
                                        <stop offset=".99" stopColor="#F09900" />
                                    </linearGradient>
                                    <linearGradient
                                        id="03d__03d__d"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <radialGradient
                                        id="03d__03d__b"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientTransform="translate(30 30) scale(27.88)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".514" stopColor="#D6B849" />
                                        <stop offset=".652" stopColor="#FFCE47" />
                                        <stop offset="1" stopColor="#FFDB73" />
                                    </radialGradient>
                                    <clipPath id="03d__03d__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="03d__03d__e"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6903"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="35.34426229508197" y="33.6" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#03d__03d__a)">
                                    <path
                                        fill="url(#03d__03d__b)"
                                        fillRule="evenodd"
                                        d="M52.315 18.517l1.757-2.457-11.356 1.224L43.872 5.86l-9.248 6.732L30 2.12l-4.624 10.472L16.06 5.86l1.224 11.356L5.86 16.06l6.732 9.248L2.12 30l10.472 4.624L5.86 43.94l.57-.061c.369-.441.759-.868 1.17-1.279 3.5-3.6 8.1-5.7 13.1-6 2.7-3.9 7.2-6.2 12.1-6.2h1.1c4.363-6.14 11.011-10.453 18.415-11.883z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#FFD348"
                                        fillRule="evenodd"
                                        d="M14.867 37.83A20.01 20.01 0 0120.7 36.6c2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.679 29.679 0 0110.672-9.21c-4.775-7.863-15.023-10.525-23.082-5.956-7.87 4.565-10.725 14.6-6.623 22.597z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03d__03d__c)"
                                        fillRule="evenodd"
                                        d="M17.565 37.034c1.022-.224 2.07-.37 3.135-.434 2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.635 29.635 0 018.287-7.849c-4.026-6.562-12.633-8.81-19.328-4.927-6.765 3.923-9.155 12.626-5.294 19.41z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03d__03d__d)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#03d__03d__e)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="03d__03d__c"
                                        x1="20.817"
                                        x2="39.177"
                                        y1="19.057"
                                        y2="40.937"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FFAF22" />
                                        <stop offset=".99" stopColor="#F09900" />
                                    </linearGradient>
                                    <linearGradient
                                        id="03d__03d__d"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <radialGradient
                                        id="03d__03d__b"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientTransform="translate(30 30) scale(27.88)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".514" stopColor="#D6B849" />
                                        <stop offset=".652" stopColor="#FFCE47" />
                                        <stop offset="1" stopColor="#FFDB73" />
                                    </radialGradient>
                                    <clipPath id="03d__03d__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="03d__03d__e"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6903"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="59.016393442622956" y="38.64" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#03d__03d__a)">
                                    <path
                                        fill="url(#03d__03d__b)"
                                        fillRule="evenodd"
                                        d="M52.315 18.517l1.757-2.457-11.356 1.224L43.872 5.86l-9.248 6.732L30 2.12l-4.624 10.472L16.06 5.86l1.224 11.356L5.86 16.06l6.732 9.248L2.12 30l10.472 4.624L5.86 43.94l.57-.061c.369-.441.759-.868 1.17-1.279 3.5-3.6 8.1-5.7 13.1-6 2.7-3.9 7.2-6.2 12.1-6.2h1.1c4.363-6.14 11.011-10.453 18.415-11.883z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#FFD348"
                                        fillRule="evenodd"
                                        d="M14.867 37.83A20.01 20.01 0 0120.7 36.6c2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.679 29.679 0 0110.672-9.21c-4.775-7.863-15.023-10.525-23.082-5.956-7.87 4.565-10.725 14.6-6.623 22.597z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03d__03d__c)"
                                        fillRule="evenodd"
                                        d="M17.565 37.034c1.022-.224 2.07-.37 3.135-.434 2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.635 29.635 0 018.287-7.849c-4.026-6.562-12.633-8.81-19.328-4.927-6.765 3.923-9.155 12.626-5.294 19.41z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03d__03d__d)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#03d__03d__e)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="03d__03d__c"
                                        x1="20.817"
                                        x2="39.177"
                                        y1="19.057"
                                        y2="40.937"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FFAF22" />
                                        <stop offset=".99" stopColor="#F09900" />
                                    </linearGradient>
                                    <linearGradient
                                        id="03d__03d__d"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <radialGradient
                                        id="03d__03d__b"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientTransform="translate(30 30) scale(27.88)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".514" stopColor="#D6B849" />
                                        <stop offset=".652" stopColor="#FFCE47" />
                                        <stop offset="1" stopColor="#FFDB73" />
                                    </radialGradient>
                                    <clipPath id="03d__03d__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="03d__03d__e"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6903"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="82.68852459016394" y="50.28" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#03n__03n__a)">
                                    <path
                                        fill="url(#03n__03n__b)"
                                        fillRule="evenodd"
                                        d="M28.443 13.565c0-3.869-1.116-7.514-2.902-10.638 9.666 1.234 17.247 8.91 18.378 18.607A29.67 29.67 0 0033.9 30.4h-1.1c-4.9 0-9.4 2.3-12.1 6.2-4.058.243-7.853 1.673-11.01 4.128a21.853 21.853 0 01-5.275-6.11c.892.148 1.785.222 2.752.222 11.754 0 21.276-9.522 21.276-21.275z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03n__03n__c)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#03n__03n__d)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="03n__03n__b"
                                        x1="12.883"
                                        x2="36.651"
                                        y1="39.065"
                                        y2="7.407"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#C7B789" />
                                        <stop offset=".989" stopColor="#E1C578" />
                                    </linearGradient>
                                    <linearGradient
                                        id="03n__03n__c"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="03n__03n__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="03n__03n__d"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6924"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="106.3606557377049" y="61.2" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#03n__03n__a)">
                                    <path
                                        fill="url(#03n__03n__b)"
                                        fillRule="evenodd"
                                        d="M28.443 13.565c0-3.869-1.116-7.514-2.902-10.638 9.666 1.234 17.247 8.91 18.378 18.607A29.67 29.67 0 0033.9 30.4h-1.1c-4.9 0-9.4 2.3-12.1 6.2-4.058.243-7.853 1.673-11.01 4.128a21.853 21.853 0 01-5.275-6.11c.892.148 1.785.222 2.752.222 11.754 0 21.276-9.522 21.276-21.275z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03n__03n__c)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#03n__03n__d)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="03n__03n__b"
                                        x1="12.883"
                                        x2="36.651"
                                        y1="39.065"
                                        y2="7.407"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#C7B789" />
                                        <stop offset=".989" stopColor="#E1C578" />
                                    </linearGradient>
                                    <linearGradient
                                        id="03n__03n__c"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="03n__03n__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="03n__03n__d"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6924"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="130.0327868852459" y="68.76" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#03n__03n__a)">
                                    <path
                                        fill="url(#03n__03n__b)"
                                        fillRule="evenodd"
                                        d="M28.443 13.565c0-3.869-1.116-7.514-2.902-10.638 9.666 1.234 17.247 8.91 18.378 18.607A29.67 29.67 0 0033.9 30.4h-1.1c-4.9 0-9.4 2.3-12.1 6.2-4.058.243-7.853 1.673-11.01 4.128a21.853 21.853 0 01-5.275-6.11c.892.148 1.785.222 2.752.222 11.754 0 21.276-9.522 21.276-21.275z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03n__03n__c)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#03n__03n__d)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="03n__03n__b"
                                        x1="12.883"
                                        x2="36.651"
                                        y1="39.065"
                                        y2="7.407"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#C7B789" />
                                        <stop offset=".989" stopColor="#E1C578" />
                                    </linearGradient>
                                    <linearGradient
                                        id="03n__03n__c"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="03n__03n__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="03n__03n__d"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6924"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="153.70491803278688" y="75" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#02n__02n__a)">
                                    <path
                                        fill="url(#02n__02n__b)"
                                        fillRule="evenodd"
                                        d="M48.3 32.3c0-5.2-1.5-10.1-3.9-14.3 11.477 1.465 20.767 9.688 23.827 20.57a18.396 18.396 0 00-7.461 6.113h-.682c-3.036 0-5.824 1.425-7.497 3.842a12.25 12.25 0 00-8.117 3.718A11.765 11.765 0 0041 60.608v.123c.062 3.346 1.363 6.445 3.78 8.737 1.917 1.866 4.355 2.995 6.986 3.314A28.525 28.525 0 0140.7 75C30.2 75 21 69.2 16 60.6c1.2.2 2.4.3 3.7.3 15.8 0 28.6-12.8 28.6-28.6z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M90.272 52.428c-1.177-7.001-7.374-12.33-14.623-12.33-5.639 0-10.72 3.16-13.198 8.117a5.715 5.715 0 00-2.23-.434c-2.603 0-4.834 1.55-5.701 3.842-.372-.062-.682-.062-1.053-.062-2.541 0-4.896.992-6.63 2.788-1.674 1.735-2.603 3.966-2.603 6.32v.124c.062 2.54 1.053 4.833 2.85 6.506 1.673 1.673 3.966 2.603 6.383 2.603h34.512c4.895 0 8.923-3.966 8.923-8.86 0-4.09-2.788-7.622-6.63-8.614z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#02n__02n__c)"
                                        fillRule="evenodd"
                                        d="M90.272 52.428c-1.177-7.001-7.374-12.33-14.623-12.33-5.639 0-10.72 3.16-13.198 8.117a5.715 5.715 0 00-2.23-.434c-2.603 0-4.834 1.55-5.701 3.842-.372-.062-.682-.062-1.053-.062-2.541 0-4.896.992-6.63 2.788-1.674 1.735-2.603 3.966-2.603 6.32v.124c.062 2.54 1.053 4.833 2.85 6.506 1.673 1.673 3.966 2.603 6.383 2.603h34.512c4.895 0 8.923-3.966 8.923-8.86 0-4.09-2.788-7.622-6.63-8.614z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#02n__02n__d)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M58.176 65.503c1.107 0 15.396-.789 16.407-1.24 1.382-.616-1.481-4.32 0-4.628.669-.139 1.652-.575 1.652-.575s2.698-.992 3.163-.992c.465 0 .232-1.837.086-2.98l-.086-.819c0-.539-1.606-1.657-1.86-3.017-.175-.947.263-2.221.172-2.459 0 0-.032-.017-.022-.02.008-.002.016.005.022.02.07.033.571.203.571.203 1.207.409 3.116 1.078 4.834 2.256 1.028.704 2.442 2.053 2.442 2.053s1.02.788 1.276 1.045c.62.62 2.478 2.478 3.718 2.478h3.098l1.394.985.31 1.99c0 4.895-4.028 8.86-8.923 8.86H51.36s2.788-3.16 6.816-3.16z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="02n__02n__b"
                                        x1="27.195"
                                        x2="64.073"
                                        y1="72.492"
                                        y2="29.427"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#C7B789" />
                                        <stop offset=".989" stopColor="#E1C578" />
                                    </linearGradient>
                                    <linearGradient
                                        id="02n__02n__c"
                                        x1="69.329"
                                        x2="70.568"
                                        y1="49.702"
                                        y2="69.902"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="02n__02n__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="02n__02n__d"
                                        width="52.668"
                                        height="28.565"
                                        x="47.022"
                                        y="44.435"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6889"
                                            stdDeviation="2.169"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="177.37704918032787" y="79.92" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#03n__03n__a)">
                                    <path
                                        fill="url(#03n__03n__b)"
                                        fillRule="evenodd"
                                        d="M28.443 13.565c0-3.869-1.116-7.514-2.902-10.638 9.666 1.234 17.247 8.91 18.378 18.607A29.67 29.67 0 0033.9 30.4h-1.1c-4.9 0-9.4 2.3-12.1 6.2-4.058.243-7.853 1.673-11.01 4.128a21.853 21.853 0 01-5.275-6.11c.892.148 1.785.222 2.752.222 11.754 0 21.276-9.522 21.276-21.275z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03n__03n__c)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#03n__03n__d)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="03n__03n__b"
                                        x1="12.883"
                                        x2="36.651"
                                        y1="39.065"
                                        y2="7.407"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#C7B789" />
                                        <stop offset=".989" stopColor="#E1C578" />
                                    </linearGradient>
                                    <linearGradient
                                        id="03n__03n__c"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="03n__03n__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="03n__03n__d"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6924"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="201.04918032786884" y="79.32000000000001" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <path
                                    fill="url(#01n__01n__a)"
                                    d="M51.4 21c2.4 4.2 3.9 9.1 3.9 14.3 0 15.8-12.8 28.6-28.6 28.6-1.3 0-2.5-.1-3.7-.3C28 72.2 37.2 78 47.7 78c15.8 0 28.6-12.8 28.6-28.6 0-14.6-10.8-26.6-24.9-28.4z"
                                />
                                <defs>
                                    <linearGradient
                                        id="01n__01n__a"
                                        x1="34.425"
                                        x2="71.181"
                                        y1="75.492"
                                        y2="31.689"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#C7B789" />
                                        <stop offset=".989" stopColor="#E1C578" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="224.7213114754098" y="65.63999999999999" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#01d__01d__a)">
                                    <path
                                        fill="url(#01d__01d__b)"
                                        d="M75.6 56.9L91 50l-15.4-6.8 9.8-13.7-16.7 1.8 1.7-16.8-13.6 9.9L50 9l-6.8 15.4-13.7-9.9 1.8 16.7-16.8-1.7 9.9 13.6L9 50l15.4 6.8-9.9 13.7 16.7-1.8-1.7 16.8 13.6-9.9L50 91l6.8-15.4 13.7 9.8-1.8-16.7 16.8 1.7-9.9-13.5z"
                                    />
                                    <path
                                        fill="#FFD348"
                                        d="M28.284 62.509c6.901 11.908 22.205 16.01 34.208 9.206C74.496 64.91 78.497 49.5 71.695 37.491c-6.902-11.908-22.206-16.01-34.21-9.206-11.901 6.905-16.002 22.315-9.2 34.224z"
                                    />
                                    <path
                                        fill="url(#01d__01d__c)"
                                        d="M31.8 60.493c5.798 9.998 18.695 13.497 28.693 7.699 9.998-5.799 13.497-18.696 7.699-28.694C62.393 29.5 49.496 26 39.498 31.799 29.5 37.6 26 50.496 31.799 60.493z"
                                    />
                                </g>
                                <defs>
                                    <radialGradient
                                        id="01d__01d__b"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientTransform="matrix(41 0 0 41 50 50)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".514" stopColor="#D6B849" />
                                        <stop offset=".652" stopColor="#FFCE47" />
                                        <stop offset="1" stopColor="#FFDB73" />
                                    </radialGradient>
                                    <linearGradient
                                        id="01d__01d__c"
                                        x1="36.496"
                                        x2="63.495"
                                        y1="33.908"
                                        y2="66.084"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FFAF22" />
                                        <stop offset=".99" stopColor="#F09900" />
                                    </linearGradient>
                                    <clipPath id="01d__01d__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="248.39344262295083" y="46.79999999999998" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#03d__03d__a)">
                                    <path
                                        fill="url(#03d__03d__b)"
                                        fillRule="evenodd"
                                        d="M52.315 18.517l1.757-2.457-11.356 1.224L43.872 5.86l-9.248 6.732L30 2.12l-4.624 10.472L16.06 5.86l1.224 11.356L5.86 16.06l6.732 9.248L2.12 30l10.472 4.624L5.86 43.94l.57-.061c.369-.441.759-.868 1.17-1.279 3.5-3.6 8.1-5.7 13.1-6 2.7-3.9 7.2-6.2 12.1-6.2h1.1c4.363-6.14 11.011-10.453 18.415-11.883z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#FFD348"
                                        fillRule="evenodd"
                                        d="M14.867 37.83A20.01 20.01 0 0120.7 36.6c2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.679 29.679 0 0110.672-9.21c-4.775-7.863-15.023-10.525-23.082-5.956-7.87 4.565-10.725 14.6-6.623 22.597z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03d__03d__c)"
                                        fillRule="evenodd"
                                        d="M17.565 37.034c1.022-.224 2.07-.37 3.135-.434 2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.635 29.635 0 018.287-7.849c-4.026-6.562-12.633-8.81-19.328-4.927-6.765 3.923-9.155 12.626-5.294 19.41z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03d__03d__d)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#03d__03d__e)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="03d__03d__c"
                                        x1="20.817"
                                        x2="39.177"
                                        y1="19.057"
                                        y2="40.937"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FFAF22" />
                                        <stop offset=".99" stopColor="#F09900" />
                                    </linearGradient>
                                    <linearGradient
                                        id="03d__03d__d"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <radialGradient
                                        id="03d__03d__b"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientTransform="translate(30 30) scale(27.88)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".514" stopColor="#D6B849" />
                                        <stop offset=".652" stopColor="#FFCE47" />
                                        <stop offset="1" stopColor="#FFDB73" />
                                    </radialGradient>
                                    <clipPath id="03d__03d__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="03d__03d__e"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6903"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="272.0655737704918" y="35.040000000000006" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#04__04__a)">
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#04__04__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#04__04__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="04__04__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="04__04__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="04__04__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6931"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="295.73770491803276" y="27.239999999999995" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#04__04__a)">
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#04__04__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#04__04__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="04__04__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="04__04__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="04__04__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6931"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="319.40983606557376" y="25.80000000000001" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#04__04__a)">
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#04__04__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#04__04__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="04__04__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="04__04__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="04__04__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6931"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="343.08196721311475" y="25.80000000000001" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#03d__03d__a)">
                                    <path
                                        fill="url(#03d__03d__b)"
                                        fillRule="evenodd"
                                        d="M52.315 18.517l1.757-2.457-11.356 1.224L43.872 5.86l-9.248 6.732L30 2.12l-4.624 10.472L16.06 5.86l1.224 11.356L5.86 16.06l6.732 9.248L2.12 30l10.472 4.624L5.86 43.94l.57-.061c.369-.441.759-.868 1.17-1.279 3.5-3.6 8.1-5.7 13.1-6 2.7-3.9 7.2-6.2 12.1-6.2h1.1c4.363-6.14 11.011-10.453 18.415-11.883z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#FFD348"
                                        fillRule="evenodd"
                                        d="M14.867 37.83A20.01 20.01 0 0120.7 36.6c2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.679 29.679 0 0110.672-9.21c-4.775-7.863-15.023-10.525-23.082-5.956-7.87 4.565-10.725 14.6-6.623 22.597z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03d__03d__c)"
                                        fillRule="evenodd"
                                        d="M17.565 37.034c1.022-.224 2.07-.37 3.135-.434 2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.635 29.635 0 018.287-7.849c-4.026-6.562-12.633-8.81-19.328-4.927-6.765 3.923-9.155 12.626-5.294 19.41z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03d__03d__d)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#03d__03d__e)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="03d__03d__c"
                                        x1="20.817"
                                        x2="39.177"
                                        y1="19.057"
                                        y2="40.937"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FFAF22" />
                                        <stop offset=".99" stopColor="#F09900" />
                                    </linearGradient>
                                    <linearGradient
                                        id="03d__03d__d"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <radialGradient
                                        id="03d__03d__b"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientTransform="translate(30 30) scale(27.88)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".514" stopColor="#D6B849" />
                                        <stop offset=".652" stopColor="#FFCE47" />
                                        <stop offset="1" stopColor="#FFDB73" />
                                    </radialGradient>
                                    <clipPath id="03d__03d__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="03d__03d__e"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6903"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="366.75409836065575" y="33.000000000000014" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#03n__03n__a)">
                                    <path
                                        fill="url(#03n__03n__b)"
                                        fillRule="evenodd"
                                        d="M28.443 13.565c0-3.869-1.116-7.514-2.902-10.638 9.666 1.234 17.247 8.91 18.378 18.607A29.67 29.67 0 0033.9 30.4h-1.1c-4.9 0-9.4 2.3-12.1 6.2-4.058.243-7.853 1.673-11.01 4.128a21.853 21.853 0 01-5.275-6.11c.892.148 1.785.222 2.752.222 11.754 0 21.276-9.522 21.276-21.275z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03n__03n__c)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#03n__03n__d)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="03n__03n__b"
                                        x1="12.883"
                                        x2="36.651"
                                        y1="39.065"
                                        y2="7.407"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#C7B789" />
                                        <stop offset=".989" stopColor="#E1C578" />
                                    </linearGradient>
                                    <linearGradient
                                        id="03n__03n__c"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="03n__03n__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="03n__03n__d"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6924"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="390.4262295081967" y="40.67999999999999" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#09__09__a)">
                                    <path
                                        fill="#B2B2B2"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#09__09__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#09__09__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                    <path
                                        fill="#00B8F1"
                                        d="M35.5 90c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5zm13 9c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5zm15-9c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5z"
                                    />
                                </g>
                                <defs>
                                    <linearGradient
                                        id="09__09__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="09__09__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="09__09__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_7175"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="414.0983606557377" y="46.2" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#04__04__a)">
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#04__04__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#04__04__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="04__04__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="04__04__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="04__04__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6931"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="437.77049180327873" y="45" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#09__09__a)">
                                    <path
                                        fill="#B2B2B2"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#09__09__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#09__09__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                    <path
                                        fill="#00B8F1"
                                        d="M35.5 90c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5zm13 9c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5zm15-9c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5z"
                                    />
                                </g>
                                <defs>
                                    <linearGradient
                                        id="09__09__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="09__09__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="09__09__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_7175"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="461.4426229508196" y="51.11999999999999" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#46__46__a)">
                                    <path
                                        fill="#CCC"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#46__46__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#46__46__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                    <path
                                        fill="#00B8F1"
                                        d="M35.5 99c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5zm24-9c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5z"
                                    />
                                </g>
                                <defs>
                                    <linearGradient
                                        id="46__46__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="46__46__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="46__46__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_8265"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="485.11475409836066" y="63.84" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#04__04__a)">
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#04__04__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#04__04__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="04__04__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="04__04__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="04__04__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6931"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="508.78688524590166" y="63.480000000000004" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#04__04__a)">
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#04__04__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#04__04__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="04__04__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="04__04__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="04__04__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6931"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="532.4590163934425" y="52.08" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#02d__02d__a)">
                                    <path
                                        fill="url(#02d__02d__b)"
                                        fillRule="evenodd"
                                        d="M79.698 37.47L85.4 29.5l-16.7 1.8 1.7-16.8-13.6 9.9L50 9l-6.8 15.4-13.7-9.9 1.8 16.7-16.8-1.7 9.9 13.6L9 50l15.4 6.8-9.9 13.7 16.7-1.8-1.7 16.8 13.6-9.9L50 91l6.8-15.4 13.7 9.8-1.35-12.524H53.466c-3.222 0-6.258-1.177-8.55-3.408-2.417-2.292-3.718-5.39-3.78-8.737v-.123c0-3.16 1.24-6.135 3.47-8.365a12.25 12.25 0 018.117-3.718c1.673-2.417 4.461-3.842 7.497-3.842h.682C64.248 39.974 69.762 37 75.649 37c1.384 0 2.741.163 4.05.47z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#FFD348"
                                        fillRule="evenodd"
                                        d="M60.178 72.876c-11.59 5.094-25.43.788-31.894-10.367-6.802-11.909-2.701-27.32 9.202-34.224 11.991-6.798 27.276-2.71 34.188 9.17a18.36 18.36 0 00-10.772 7.228h-.682c-3.036 0-5.824 1.425-7.497 3.842a12.25 12.25 0 00-8.117 3.718 11.765 11.765 0 00-3.47 8.365v.123c.062 3.346 1.363 6.445 3.78 8.737 2.292 2.23 5.328 3.408 8.55 3.408h6.712z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#02d__02d__c)"
                                        fillRule="evenodd"
                                        d="M46.356 70.665C40.454 69.61 35.027 66.058 31.8 60.493c-5.798-9.998-2.3-22.895 7.699-28.694 9.774-5.669 22.32-2.45 28.294 7.038a18.394 18.394 0 00-6.89 5.846h-.682c-3.036 0-5.824 1.425-7.497 3.842a12.25 12.25 0 00-8.117 3.718 11.766 11.766 0 00-3.47 8.365v.123c.062 3.346 1.363 6.445 3.78 8.737.452.44.934.84 1.44 1.197z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M90.272 52.428c-1.177-7.001-7.374-12.33-14.623-12.33-5.639 0-10.72 3.16-13.198 8.117a5.715 5.715 0 00-2.23-.434c-2.603 0-4.834 1.55-5.701 3.842-.372-.062-.682-.062-1.054-.062-2.54 0-4.895.992-6.63 2.788-1.672 1.735-2.602 3.966-2.602 6.32v.124c.062 2.54 1.053 4.833 2.85 6.506 1.673 1.673 3.966 2.603 6.382 2.603H87.98c4.895 0 8.923-3.966 8.923-8.86 0-4.09-2.788-7.622-6.63-8.614z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#02d__02d__d)"
                                        fillRule="evenodd"
                                        d="M90.272 52.428c-1.177-7.001-7.374-12.33-14.623-12.33-5.639 0-10.72 3.16-13.198 8.117a5.715 5.715 0 00-2.23-.434c-2.603 0-4.834 1.55-5.701 3.842-.372-.062-.682-.062-1.054-.062-2.54 0-4.895.992-6.63 2.788-1.672 1.735-2.602 3.966-2.602 6.32v.124c.062 2.54 1.053 4.833 2.85 6.506 1.673 1.673 3.966 2.603 6.382 2.603H87.98c4.895 0 8.923-3.966 8.923-8.86 0-4.09-2.788-7.622-6.63-8.614z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#02d__02d__e)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M58.176 65.503c1.107 0 15.396-.789 16.407-1.24 1.382-.616-1.481-4.32 0-4.628.669-.139 1.652-.575 1.652-.575s2.698-.992 3.163-.992c.465 0 .232-1.837.086-2.98l-.086-.819c0-.539-1.606-1.657-1.86-3.017-.175-.947.263-2.221.172-2.459 0 0-.032-.017-.023-.02.01-.002.017.005.023.02.07.033.571.203.571.203 1.207.409 3.116 1.078 4.834 2.256 1.028.704 2.442 2.053 2.442 2.053s1.02.788 1.276 1.045c.62.62 2.478 2.478 3.718 2.478h3.098l1.394.985.31 1.99c0 4.895-4.028 8.86-8.923 8.86H51.36s2.788-3.16 6.816-3.16z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="02d__02d__c"
                                        x1="36.496"
                                        x2="63.495"
                                        y1="33.908"
                                        y2="66.084"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FFAF22" />
                                        <stop offset=".99" stopColor="#F09900" />
                                    </linearGradient>
                                    <linearGradient
                                        id="02d__02d__d"
                                        x1="69.329"
                                        x2="70.568"
                                        y1="49.702"
                                        y2="69.902"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <radialGradient
                                        id="02d__02d__b"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientTransform="matrix(41 0 0 41 50 50)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".514" stopColor="#D6B849" />
                                        <stop offset=".652" stopColor="#FFCE47" />
                                        <stop offset="1" stopColor="#FFDB73" />
                                    </radialGradient>
                                    <clipPath id="02d__02d__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="02d__02d__e"
                                        width="52.668"
                                        height="28.565"
                                        x="47.022"
                                        y="44.435"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6868"
                                            stdDeviation="2.169"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="556.1311475409836" y="36.72" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#03d__03d__a)">
                                    <path
                                        fill="url(#03d__03d__b)"
                                        fillRule="evenodd"
                                        d="M52.315 18.517l1.757-2.457-11.356 1.224L43.872 5.86l-9.248 6.732L30 2.12l-4.624 10.472L16.06 5.86l1.224 11.356L5.86 16.06l6.732 9.248L2.12 30l10.472 4.624L5.86 43.94l.57-.061c.369-.441.759-.868 1.17-1.279 3.5-3.6 8.1-5.7 13.1-6 2.7-3.9 7.2-6.2 12.1-6.2h1.1c4.363-6.14 11.011-10.453 18.415-11.883z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#FFD348"
                                        fillRule="evenodd"
                                        d="M14.867 37.83A20.01 20.01 0 0120.7 36.6c2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.679 29.679 0 0110.672-9.21c-4.775-7.863-15.023-10.525-23.082-5.956-7.87 4.565-10.725 14.6-6.623 22.597z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03d__03d__c)"
                                        fillRule="evenodd"
                                        d="M17.565 37.034c1.022-.224 2.07-.37 3.135-.434 2.7-3.9 7.2-6.2 12.1-6.2h1.1a29.635 29.635 0 018.287-7.849c-4.026-6.562-12.633-8.81-19.328-4.927-6.765 3.923-9.155 12.626-5.294 19.41z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#03d__03d__d)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#03d__03d__e)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="03d__03d__c"
                                        x1="20.817"
                                        x2="39.177"
                                        y1="19.057"
                                        y2="40.937"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FFAF22" />
                                        <stop offset=".99" stopColor="#F09900" />
                                    </linearGradient>
                                    <linearGradient
                                        id="03d__03d__d"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <radialGradient
                                        id="03d__03d__b"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientTransform="translate(30 30) scale(27.88)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".514" stopColor="#D6B849" />
                                        <stop offset=".652" stopColor="#FFCE47" />
                                        <stop offset="1" stopColor="#FFDB73" />
                                    </radialGradient>
                                    <clipPath id="03d__03d__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="03d__03d__e"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6903"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="579.8032786885246" y="24.239999999999995" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#01d__01d__a)">
                                    <path
                                        fill="url(#01d__01d__b)"
                                        d="M75.6 56.9L91 50l-15.4-6.8 9.8-13.7-16.7 1.8 1.7-16.8-13.6 9.9L50 9l-6.8 15.4-13.7-9.9 1.8 16.7-16.8-1.7 9.9 13.6L9 50l15.4 6.8-9.9 13.7 16.7-1.8-1.7 16.8 13.6-9.9L50 91l6.8-15.4 13.7 9.8-1.8-16.7 16.8 1.7-9.9-13.5z"
                                    />
                                    <path
                                        fill="#FFD348"
                                        d="M28.284 62.509c6.901 11.908 22.205 16.01 34.208 9.206C74.496 64.91 78.497 49.5 71.695 37.491c-6.902-11.908-22.206-16.01-34.21-9.206-11.901 6.905-16.002 22.315-9.2 34.224z"
                                    />
                                    <path
                                        fill="url(#01d__01d__c)"
                                        d="M31.8 60.493c5.798 9.998 18.695 13.497 28.693 7.699 9.998-5.799 13.497-18.696 7.699-28.694C62.393 29.5 49.496 26 39.498 31.799 29.5 37.6 26 50.496 31.799 60.493z"
                                    />
                                </g>
                                <defs>
                                    <radialGradient
                                        id="01d__01d__b"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientTransform="matrix(41 0 0 41 50 50)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".514" stopColor="#D6B849" />
                                        <stop offset=".652" stopColor="#FFCE47" />
                                        <stop offset="1" stopColor="#FFDB73" />
                                    </radialGradient>
                                    <linearGradient
                                        id="01d__01d__c"
                                        x1="36.496"
                                        x2="63.495"
                                        y1="33.908"
                                        y2="66.084"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#FFAF22" />
                                        <stop offset=".99" stopColor="#F09900" />
                                    </linearGradient>
                                    <clipPath id="01d__01d__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="603.4754098360655" y="17.39999999999999" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#04__04__a)">
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#04__04__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#04__04__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="04__04__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="04__04__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="04__04__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6931"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="627.1475409836065" y="33.959999999999994" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#46__46__a)">
                                    <path
                                        fill="#CCC"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#46__46__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#46__46__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                    <path
                                        fill="#00B8F1"
                                        d="M35.5 99c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5zm24-9c-.3 0-.7-.1-1-.2-1.3-.6-1.8-2-1.3-3.3l3.5-8c.6-1.3 2-1.8 3.3-1.3 1.3.6 1.8 2 1.3 3.3l-3.5 8c-.4 1-1.3 1.5-2.3 1.5z"
                                    />
                                </g>
                                <defs>
                                    <linearGradient
                                        id="46__46__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="46__46__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="46__46__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_8265"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="650.8196721311475" y="52.92" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#04__04__a)">
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#04__04__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#04__04__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="04__04__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="04__04__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="04__04__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6931"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="674.4918032786885" y="63.24000000000001" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#04__04__a)">
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#04__04__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#04__04__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="04__04__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="04__04__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="04__04__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6931"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>

                        <svg x="698.1639344262295" y="67.68" width="24" height="24">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 100 100"
                            >
                                <g clipPath="url(#04__04__a)">
                                    <path
                                        fill="#DDD"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fill="url(#04__04__b)"
                                        fillRule="evenodd"
                                        d="M81.3 42.9C79.4 31.6 69.4 23 57.7 23c-9.1 0-17.3 5.1-21.3 13.1-1.2-.5-2.4-.7-3.6-.7-4.2 0-7.8 2.5-9.2 6.2-.6-.1-1.1-.1-1.7-.1-4.1 0-7.9 1.6-10.7 4.5C8.5 48.8 7 52.4 7 56.2v.2c.1 4.1 1.7 7.8 4.6 10.5 2.7 2.7 6.4 4.2 10.3 4.2h55.7c7.9 0 14.4-6.4 14.4-14.3 0-6.6-4.5-12.3-10.7-13.9z"
                                        clipRule="evenodd"
                                        opacity=".6"
                                    />
                                    <g filter="url(#04__04__c)" opacity=".3">
                                        <path
                                            fill="#B6B6B6"
                                            d="M29.5 64c1.787 0 24.848-1.272 26.48-2 2.23-.994-2.39-6.972 0-7.47 1.08-.224 2.667-.927 2.667-.927s4.352-1.602 5.103-1.602c.75 0 .374-2.964.14-4.81l-.14-1.32c0-.87-2.592-2.674-3-4.87-.284-1.527.424-3.585.276-3.968 0 0-.05-.029-.036-.032.014-.004.026.007.036.032.112.053.922.327.922.327 1.948.66 5.03 1.74 7.802 3.64 1.658 1.138 3.941 3.314 3.941 3.314s1.645 1.272 2.059 1.687c1 1 4 4 6 4h5L89 51.59l.5 3.21c0 7.9-6.5 14.3-14.4 14.3H18.5S23 64 29.5 64z"
                                        />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="04__04__b"
                                        x1="47.5"
                                        x2="49.5"
                                        y1="38.5"
                                        y2="71.1"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset=".484" stopColor="#fff" stopOpacity="0" />
                                        <stop offset="1" stopColor="#B3B2B2" />
                                    </linearGradient>
                                    <clipPath id="04__04__a">
                                        <path fill="#fff" d="M0 0h100v100H0z" />
                                    </clipPath>
                                    <filter
                                        id="04__04__c"
                                        width="85"
                                        height="46.101"
                                        x="11.5"
                                        y="30"
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="BackgroundImageFix"
                                            result="shape"
                                        />
                                        <feGaussianBlur
                                            result="effect1_foregroundBlur_1334_6931"
                                            stdDeviation="3.5"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </svg>
                    </g>

                    <g transform="translate(30 168)"></g>

                    <g transform="translate(30 180)">
                        <line x1="0" x2="722" y1="72" y2="72" stroke="#374759" strokeDasharray="" />
                        <line x1="0" x2="722" y1="60" y2="60" stroke="#374759" strokeDasharray="" />
                        <line
                            x1="0"
                            x2="722"
                            y1="48.00000000000001"
                            y2="48.00000000000001"
                            stroke="#374759"
                            strokeDasharray=""
                        />
                        <line x1="0" x2="722" y1="36" y2="36" stroke="#374759" strokeDasharray="" />
                        <line
                            x1="0"
                            x2="722"
                            y1="24.000000000000004"
                            y2="24.000000000000004"
                            stroke="#374759"
                            strokeDasharray=""
                        />
                        <line
                            x1="0"
                            x2="722"
                            y1="11.999999999999996"
                            y2="11.999999999999996"
                            stroke="#374759"
                            strokeDasharray=""
                        />

                        <SVGLines />
                        <g
                            transform="translate(-17, -6) scale(0.5)"
                            filter="invert(70%) sepia(8%) saturate(388%) hue-rotate(192deg) brightness(95%) contrast(85%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    d="M18 12H2m7.268-7A2 2 0 1 1 11 8H2m11.5 12a2.5 2.5 0 1 0 2-4H2m15.99-4a3 3 0 1 0-1.801-5.4"
                                />
                            </svg>
                        </g>
                        <text
                            className={styles.yAxisLabel}
                            x="-5"
                            y="24.000000000000004"
                            dy="0.35em"
                            textAnchor="end"
                        >
                            8
                        </text>
                        <text
                            className={styles.yAxisLabel}
                            x="-5"
                            y="48.00000000000001"
                            dy="0.35em"
                            textAnchor="end"
                        >
                            4
                        </text>
                        <text
                            className={styles.yAxisLabel}
                            x="-5"
                            y="72"
                            dy="0.35em"
                            textAnchor="end"
                        >
                            0
                        </text>

                        <path
                            fill="none"
                            stroke="#c438ff"
                            strokeWidth="1.5"
                            d={line(data) as unknown as string}
                        />
                        <g fill="white" stroke="white" strokeWidth="1.5">
                            {data.map((d, i) => (
                                <circle key={i} cx={x(i)} cy={y(d)} r="0.2" />
                            ))}
                        </g>
                    </g>

                    <g transform="translate(30 252)">
                        <g
                            transform="translate(-8, 1) rotate(146, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(15.672131147540984, 1) rotate(154, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(39.34426229508197, 1) rotate(154, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(63.016393442622956, 1) rotate(143, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(86.68852459016394, 1) rotate(134, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(110.3606557377049, 1) rotate(127, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(134.0327868852459, 1) rotate(126, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(157.70491803278688, 1) rotate(119, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(181.37704918032787, 1) rotate(111, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(205.04918032786884, 1) rotate(119, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(228.7213114754098, 1) rotate(125, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(252.39344262295083, 1) rotate(130, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(276.0655737704918, 1) rotate(143, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(299.73770491803276, 1) rotate(144, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(323.40983606557376, 1) rotate(146, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(347.08196721311475, 1) rotate(145, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(370.75409836065575, 1) rotate(122, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(394.4262295081967, 1) rotate(131, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(418.0983606557377, 1) rotate(124, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(441.77049180327873, 1) rotate(151, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(465.4426229508196, 1) rotate(169, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(489.11475409836066, 1) rotate(198, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(512.7868852459017, 1) rotate(234, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(536.4590163934425, 1) rotate(199, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(560.1311475409836, 1) rotate(214, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(583.8032786885246, 1) rotate(204, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(607.4754098360655, 1) rotate(206, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(631.1475409836065, 1) rotate(201, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(654.8196721311475, 1) rotate(217, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(678.4918032786885, 1) rotate(282, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>

                        <g
                            transform="translate(702.1639344262295, 1) rotate(286, 8, 8) scale(0.6666666666666666)"
                            filter="invert(99%) sepia(0%) saturate(0%) hue-rotate(146deg) brightness(104%) contrast(100%)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </g>
                    </g>

                    <g transform="translate(30, 278)">
                        <g transform="translate(0, 0)">
                            <svg x="0" y="4" width="10" height="10">
                                <rect x="0" y="40%" width="100%" height="20%" fill="#ff2d3f" />
                            </svg>

                            <text className={styles.legendLabel} x="14" y="9" dy="0.35em">
                                Temperature °C
                            </text>
                        </g>

                        <g transform="translate(126, 0)">
                            <svg x="0" y="4" width="10" height="10">
                                <rect x="0" y="0" width="100%" height="100%" fill="#00b8f1" />
                            </svg>

                            <text className={styles.legendLabel} x="14" y="9" dy="0.35em">
                                Precipitation mm
                            </text>
                        </g>

                        <g transform="translate(258, 0)">
                            <svg x="0" y="4" width="10" height="10">
                                <rect x="0" y="40%" width="100%" height="20%" fill="#c438ff" />
                            </svg>

                            <text className={styles.legendLabel} x="14" y="9" dy="0.35em">
                                Wind m/s
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        </>
    );
}
