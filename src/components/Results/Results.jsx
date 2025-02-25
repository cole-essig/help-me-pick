import './Results.css'

function Results({ randomPick, madeChoice }) {
    return (
        <div className={`results ${madeChoice ? 'results_on' : ''}` }>
          <p className='results__display'>{randomPick}</p>
          <div className='results results__display_pulse_animation'></div>
        </div>

    )
}

export default Results;