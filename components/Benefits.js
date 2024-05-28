import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faUserShield, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import {RequestAsyncStorageWrapper} from "next/dist/server/async-storage/request-async-storage-wrapper";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BenefitsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    max-height: 800px;
    width: 90vw;
    color: var(--text-light);
    justify-content: center;
    
    @media (max-width: 768px) {
        max-height: none;
        height: auto;
    }
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
`;

const ChartAndContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BenefitsContent = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 2rem;
  }
`;

const ChartContainer = styled.div`
  width: 70%;
  background: var(--deep-blue);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Benefit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const initialData = {
    labels: ['Efektywność Czasowa', 'Wzrost Siły Mięśniowej', 'Poprawa Krążenia', 'Wsparcie Rehabilitacji', 'Redukcja Bólu', 'Redukcja Tkanki Tłuszczowej'],
    datasets: [
        {
            label: 'Skuteczność (%)',
            data: [90, 75, 60, 85, 80, 70],
            backgroundColor: ['#FF4500', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00', '#FFA500'],
        }
    ]
};

const Benefits = React.memo(() => {
    const chartRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const options = {
        scales: {
            x: {
                display: !isMobile,
                ticks: {
                    color: "white",
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Skuteczność (%)',
                    color: 'white',
                    font: {
                        size: 16
                    }
                },
                ticks: {
                    color: "white",
                    stepSize: 10
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'white',
                    font: {
                        size: 16
                    }
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
            <Wrapper>
            <TitleContainer>
                <h1>Korzyści z EMS</h1>
            </TitleContainer>
            <ChartAndContentContainer>
                <BenefitsContent>
                    <Benefit>
                        <FontAwesomeIcon icon={faBolt} color="#FFD700" aria-label="Szybkie rezultaty" />
                        <h3>Szybkie rezultaty</h3>
                    </Benefit>
                    <Benefit>
                        <FontAwesomeIcon icon={faUserShield} color="#007FFF" aria-label="Bezpieczne dla stawów" />
                        <h3>Bezpieczne dla stawów</h3>
                    </Benefit>
                    <Benefit>
                        <FontAwesomeIcon icon={faHeartbeat} color="#00FF00" aria-label="Personalizowane treningi" />
                        <h3>Personalizowane treningi</h3>
                    </Benefit>
                </BenefitsContent>
                <ChartContainer>
                    <Bar ref={chartRef} data={initialData} options={options} />
                </ChartContainer>
            </ChartAndContentContainer>
            </Wrapper>
        </BenefitsContainer>
    );
});

export default Benefits;
