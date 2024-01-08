export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange(event.target.value, 'initialInvestment')
            }
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange(event.target.value, 'annualInvestment')
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected investment</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange(event.target.value, 'expectedReturn')}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChange(event.target.value, 'duration')}
          />
        </p>
      </div>
    </section>
  );
}
