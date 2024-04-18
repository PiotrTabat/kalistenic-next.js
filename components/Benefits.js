import React, { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faUserShield, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  width: 100vw;
  background: linear-gradient(to right, var(--dark-blue), var(--electric-blue));
  color: var(--text-light);
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
`;

const ChartAndContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const BenefitsContent = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ChartContainer = styled.div`
  width: 70%;
  background: var(--deep-blue);
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Benefit = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 2rem;

  svg {
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }

  h3 {
    color: var(--text-light);
  }
`;

const data = {
    labels: ['Efektywność Czasowa', 'Wzrost Siły Mięśniowej', 'Poprawa Krążenia', 'Wsparcie Rehabilitacji', 'Redukcja Bólu', 'Redukcja Tkanki Tłuszczowej'],
    datasets: [
        {
            label: 'Skuteczność (%)',
            data: [90, 75, 60, 85, 80, 70],
            backgroundColor: ['#FF4500', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00', '#FFA500'],
        }
    ]
};

const Benefits = () => {
    const chartRef = useRef(null);

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Skuteczność (%)',
                    color: 'white'
                },
                ticks: {
                    color: "white",
                }
            },
            x: {
                ticks: {
                    color: "white",
                    autoSkip: false,
                    maxRotation: 15,
                    minRotation: 15
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'white'
                }
            }
        },
        maintainAspectRatio: false,
        onHover: (event, chartElement) => {
            const canvas = chartRef.current.canvas;
            if (canvas) {
                canvas.style.cursor = (chartElement && chartElement.length) ? 'pointer' : 'default';
            }
        }
    };

    return (
        <BenefitsContainer>
            <TitleContainer>
                <h1>Korzyści z EMS</h1>
            </TitleContainer>
            <ChartAndContentContainer>
                <BenefitsContent>
                    <Benefit>
                        <FontAwesomeIcon icon={faBolt} color="#FFD700" />
                        <h3>Szybkie rezultaty</h3>
                    </Benefit>
                    <Benefit>
                        <FontAwesomeIcon icon={faUserShield} color="#007FFF" />
                        <h3>Bezpieczne dla stawów</h3>
                    </Benefit>
                    <Benefit>
                        <FontAwesomeIcon icon={faHeartbeat} color="#00FF00" />
                        <h3>Personalizowane treningi</h3>
                    </Benefit>
                </BenefitsContent>
                <ChartContainer>
                    <Bar ref={chartRef} data={data} options={options} />
                </ChartContainer>
            </ChartAndContentContainer>
        </BenefitsContainer>
    );
};

export default Benefits;
