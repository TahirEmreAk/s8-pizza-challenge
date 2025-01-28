import React, { useState } from "react";
import "./PizzaForm.css";
import axios from "axios";


const initialValues = {
    name: "",
    size: "",
    dough: "",
    toppings: [],
    note: "",
    quantity: 1,
}

const PizzaForm = () => {
    const [formData, setFormData] = useState(initialValues);

    const toppingsList = [
        "Pepperoni",
        "Sosis",
        "Kanada Jambonu",
        "Tavuk Izgara",
        "Soğan",
        "Domates",
        "Mısır",
        "Sucuk",
        "Jalapeno",
        "Sarımsak",
        "Biber",
        "Ananas",
        "Kabak",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleToppingChange = (e) => {
        const { checked, value } = e.target;
        const updatedToppings = checked
            ? [...formData.toppings, value]
            : formData.toppings.filter((t) => t !== value);
        setFormData({ ...formData, toppings: updatedToppings });
    };

    const handleQuantityChange = (amount) => {
        if (formData.quantity + amount > 0) {
            setFormData({ ...formData, quantity: formData.quantity + amount });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Sipariş verildi!");
        console.log(formData);
        axios.post("https://reqres.in/api/pizza", formData).then(response => {
            console.log(response);
            setFormData(initialValues)
        }).catch(error => { console.warn(error) })
    };

    const basePrice = 85.5;
    const toppingsPrice = formData.toppings.length * 5;
    const totalPrice = (basePrice + toppingsPrice) * formData.quantity;

    return (
        <form onSubmit={handleSubmit} className="pizza-form">
            <h2>Position Absolute Acı Pizza</h2>
            <p className="price">85.50₺</p>
            <p className="description">
                Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve çeşitli diğer malzemelerle kaplanmış bir lezzet şölenidir.
            </p>
            <div className="form-row size-crust-container">
                <div className="size-container">
                    <h3>Boyut Seç *</h3>
                    <div className="size-options">
                        <label>
                            <input type="radio" name="size" value="Küçük" onChange={handleChange} />
                            Küçük
                        </label>
                        <label>
                            <input type="radio" name="size" value="Orta" onChange={handleChange} />
                            Orta
                        </label>
                        <label>
                            <input type="radio" name="size" value="Büyük" onChange={handleChange} />
                            Büyük
                        </label>
                    </div></div>

                <div className="crust-container">
                    <h3>Hamur Seç *</h3>
                    <select name="dough" value={formData.dough} onChange={handleChange}>
                        <option value="">Hamur Kalınlığı</option>
                        <option value="İnce">İnce</option>
                        <option value="Normal">Normal</option>
                        <option value="Kalın">Kalın</option>
                    </select>
                </div>
            </div>
            <div className="form-section">
                <h3>Ek Malzemeler</h3>
                <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                <div className="toppings-grid">
                    {toppingsList.map((topping, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                value={topping}
                                onChange={handleToppingChange}
                                disabled={formData.toppings.length >= 10 && !formData.toppings.includes(topping)}
                            />
                            {topping}
                        </label>
                    ))}
                </div>
            </div>

            <div className="form-section">
                <h3>Sipariş Notu</h3>
                <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                />
            </div>

            <div className="order-summary">
                <div className="quantity-control">
                    <button type="button" onClick={() => handleQuantityChange(-1)}>
                        -
                    </button>
                    <span>{formData.quantity}</span>
                    <button type="button" onClick={() => handleQuantityChange(1)}>
                        +
                    </button>
                </div>
                <div className="total">
                    <p>
                        <strong>Seçimler:</strong> {toppingsPrice.toFixed(2)}₺
                    </p>
                    <p>
                        <strong>Toplam:</strong> {totalPrice.toFixed(2)}₺
                    </p>
                </div>
            </div>

            <button type="submit" className="submit-button">
                SİPARİŞ VER
            </button>
        </form>
    );
};

export default PizzaForm;
