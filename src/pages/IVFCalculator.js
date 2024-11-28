import React, { useState } from 'react';
import './IVFCalculator.css';
import Navbar from '../components/Navbar';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function IVFCalculator() {
    const [ageRange, setAgeRange] = useState('30-34');
    const [cycles, setCycles] = useState(1);
    const [procedures, setProcedures] = useState({
        icsi: '',
        pgt: ''
    });
    const [conditions, setConditions] = useState({
        pcos: false,
        endometriosis: true,
        lowOvarianReserve: false,
        maleFactorInfertility: false
    });
    const navigate = useNavigate();

    const handleCalculateClick = () => {
        navigate('/result');
    };

    const handleProcedureChange = (type, value) => {
        setProcedures(prev => ({
            ...prev,
            [type]: value
        }));
    };

    const handleConditionChange = (condition) => {
        setConditions(prev => ({
            ...prev,
            [condition]: !prev[condition]
        }));
    };

    return (
        <div className="ivf-calculator">
            <Navbar />
            <div className='main-content'>
            <div className="breadcrumb color-fix">
                    <span className='color-fix'>Home</span>
                    <span className='color-fix'>/</span> 
                    <span className="current color-fix">IVF Success Rate Calculator</span>
            </div>

                <div className='mobile-fix'>
                    <span>
                        <ArrowLeft className='arrow-left' />
                        <span>IVF Success Rate Calculator</span>
                    </span>
                </div>

            <div className="calculator-content">
                <h2>Which age range applies to you?</h2>
                <div className="age-options">
                    <label className={ageRange === 'under-30' ? 'selected' : ''}>
                        <input
                            type="radio"
                            name="age"
                            value="under-30"
                            checked={ageRange === 'under-30'}
                            onChange={(e) => setAgeRange(e.target.value)}
                        />
                        Under 30
                    </label>
                    <label className={ageRange === '30-34' ? 'selected' : ''}>
                        <input
                            type="radio"
                            name="age"
                            value="30-34"
                            checked={ageRange === '30-34'}
                            onChange={(e) => setAgeRange(e.target.value)}
                        />
                        Between 30 - 34
                    </label>
                    <label className={ageRange === '35-37' ? 'selected' : ''}>
                        <input
                            type="radio"
                            name="age"
                            value="35-37"
                            checked={ageRange === '35-37'}
                            onChange={(e) => setAgeRange(e.target.value)}
                        />
                        Between 35 - 37
                    </label>
                    <label className={ageRange === '38-40' ? 'selected' : ''}>
                        <input
                            type="radio"
                            name="age"
                            value="38-40"
                            checked={ageRange === '38-40'}
                            onChange={(e) => setAgeRange(e.target.value)}
                        />
                        Between 38 - 40
                    </label>
                    <label className={ageRange === '41-43' ? 'selected' : ''}>
                        <input
                            type="radio"
                            name="age"
                            value="41-43"
                            checked={ageRange === '41-43'}
                            onChange={(e) => setAgeRange(e.target.value)}
                        />
                        Between 41 - 43
                    </label>
                    <label className={ageRange === 'above-43' ? 'selected' : ''}>
                        <input
                            type="radio"
                            name="age"
                            value="above-43"
                            checked={ageRange === 'above-43'}
                            onChange={(e) => setAgeRange(e.target.value)}
                        />
                        Above 43
                    </label>
                </div>

                <h2>Number of IVF Cycles?</h2>
                <div className="cycles-slider">
                    <div className="slider-container">
                        <input
                            type="range"
                            min="1"
                            max="5"
                            value={cycles}
                            onChange={(e) => setCycles(e.target.value)}
                        />
                        <div className="slider-value" style={{ left: `${(cycles - 1) * 25}%` }}>
                            {cycles}
                        </div>
                    </div>
                </div>

                <h2>Have you undergone these procedures before?</h2>
                <div className="procedures">
                    <div className="procedure-group">
                        <span className="procedure-label">ICSI Procedure:</span>
                        <div className="procedure-options">
                            <label className={procedures.icsi === 'yes' ? 'selected' : ''}>
                                <input
                                    type="radio"
                                    name="icsi"
                                    value="yes"
                                    checked={procedures.icsi === 'yes'}
                                    onChange={(e) => handleProcedureChange('icsi', e.target.value)}
                                />
                                Yes
                            </label>
                            <label className={procedures.icsi === 'no' ? 'selected' : ''}>
                                <input
                                    type="radio"
                                    name="icsi"
                                    value="no"
                                    checked={procedures.icsi === 'no'}
                                    onChange={(e) => handleProcedureChange('icsi', e.target.value)}
                                />
                                No
                            </label>
                        </div>
                    </div>

                    <div className="procedure-group">
                        <span className="procedure-label">PGT Testing:</span>
                        <div className="procedure-options">
                            <label className={procedures.pgt === 'yes' ? 'selected' : ''}>
                                <input
                                    type="radio"
                                    name="pgt"
                                    value="yes"
                                    checked={procedures.pgt === 'yes'}
                                    onChange={(e) => handleProcedureChange('pgt', e.target.value)}
                                />
                                Yes
                            </label>
                            <label className={procedures.pgt === 'no' ? 'selected' : ''}>
                                <input
                                    type="radio"
                                    name="pgt"
                                    value="no"
                                    checked={procedures.pgt === 'no'}
                                    onChange={(e) => handleProcedureChange('pgt', e.target.value)}
                                />
                                No
                            </label>
                        </div>
                    </div>
                </div>

                <h2>Do you have any of these medical conditions?</h2>
                    <div className="conditions">
                        <label className={conditions.pcos ? 'selected' : ''}>
                            <input
                                type="checkbox"
                                checked={conditions.pcos}
                                onChange={() => handleConditionChange('pcos')}
                            />
                            <span>PCOS</span>
                        </label>
                        <label className={conditions.endometriosis ? 'selected' : ''}>
                            <input
                                type="checkbox"
                                checked={conditions.endometriosis}
                                onChange={() => handleConditionChange('endometriosis')}
                            />
                            <span>Endometriosis</span>
                        </label>
                        <label className={conditions.lowOvarianReserve ? 'selected' : ''}>
                            <input
                                type="checkbox"
                                checked={conditions.lowOvarianReserve}
                                onChange={() => handleConditionChange('lowOvarianReserve')}
                            />
                            <span>Low Ovarian Reserve</span>
                        </label>
                        <label className={conditions.maleFactorInfertility ? 'selected' : ''}>
                            <input
                                type="checkbox"
                                checked={conditions.maleFactorInfertility}
                                onChange={() => handleConditionChange('maleFactorInfertility')}
                            />
                            <span>Male Factor Infertility</span>
                        </label>
                    </div>

                    <button className="calculate-button" onClick={handleCalculateClick}>
                        Calculate
                    </button>
            </div>
            </div>
        </div>
    );
}

export default IVFCalculator;

