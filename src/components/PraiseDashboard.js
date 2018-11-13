import React from 'react';
import PraiseSummary from '../containers/PraiseSummary';
import PraiseListFilter from '../containers/PraiseListFilter';
import PraiseList from '../containers/PraiseList';

const PraiseDashboard = () => (
    <div>
        <PraiseSummary />
        <PraiseListFilter />
        <PraiseList />
    </div>
)

export default PraiseDashboard;