import { renderResult } from "./markups.js";
import state from "./state.js";
import { getFullTitle } from "./utils.js";
import variables from "./variables.js";

const { success, formResults } = variables; // resultFrom, resultTo,

export const handleChange = ({ target: { value, name } }) => {
  state.pair = {
    ...state.pair,
    [name]: value,
  };
};

export const handleInput = ({ target: { value, name } }) => {
  state[name] = Number(value);
};

const insertResults = ({
  base_code: baseCode,
  target_code: targetCode,
  conversion_rate: rate,
  conversion_result: result,
  time_last_update_utc: time,
}) => {
  const from = {
    code: baseCode,
    amount: state.amount,
    full: getFullTitle(state.codes, baseCode),
  };

  const to = {
    code: targetCode,
    amount: result,
    full: getFullTitle(state.codes, targetCode),
  };
  console.log(to);
  resultFrom.innerHTML = renderResult(from);
  resultTo.innerHTML = renderResult(to);
  formResults.classList.add("show");
};

export const handleSubmit = async (e) => {
  e?.preventDefault();

  const {
    url,
    amount,
    pair: { from, to },
  } = state;

  state.loading = true;

  //if (!amount || !from || !to) return;
  // console.log(url);
  // console.log(from);
  // console.log(to);
  // console.log(amount);

  try {
    const response = await fetch(`${url}/pair/${from}/${to}`); // /{to}/${amount}
    const data = await response.json();
    console.log(data);
    if (data.result === success) {
      insertResults(data);
    }

    state.loading = false;
  } catch (error) {
    console.log(error);
  }
};

/**
 * <div class="form-result__item-icon icon">
                            <img src="./images/arrow.svg" alt="">
                        </div>
                        <div class="form-result__item-titles">
                            <div class="form-result__item-tetle">EUR</div>
                            <div class="form-result__item-full">Euro</div>
                        </div>
                        <div class="form-result__item-value">2.00</div>
 */
