import { useReducer } from "react";

/* ---------------- Initial State ---------------- */
const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
  isSubmitted: false,
};

/* ---------------- Reducer ---------------- */
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

/* ---------------- Component ---------------- */
function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, formData, isSubmitted } = state;

  if (isSubmitted) {
    return (
      <div className="page">
        <h2>Form Submitted Successfully ✅</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Step {step} of 3</h2>

      {/* ---------- STEP 1 ---------- */}
      {step === 1 && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />

          <button
            disabled={!formData.name || !formData.email}
            onClick={() => dispatch({ type: "NEXT_STEP" })}
          >
            Next
          </button>
        </>
      )}

      {/* ---------- STEP 2 ---------- */}
      {step === 2 && (
        <>
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "username",
                value: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value,
              })
            }
          />

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>

          <button
            disabled={!formData.username || !formData.password}
            onClick={() => dispatch({ type: "NEXT_STEP" })}
          >
            Next
          </button>
        </>
      )}

      {/* ---------- STEP 3 ---------- */}
      {step === 3 && (
        <>
          <h4>Review Details</h4>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Username: {formData.username}</p>

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>

          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default MultiStepForm;
