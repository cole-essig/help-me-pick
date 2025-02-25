import './Results.css'

function Results({ randomPick, madeChoice }) {
    return (
        <div className={`results ${madeChoice ? 'results_on' : ''}` }>
          <p className='results__display'>{randomPick}</p>
        </div>

    )
}

export default Results;