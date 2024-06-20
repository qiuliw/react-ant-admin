import styled from "styled-components"

export default function () {

    return (
        <Scoped>
            <div className="currency-component-container">
                <span className="introduction-packages__item__charges--prefix">
                    $
                </span>
                <span className="introduction-packages__item__charges--content">
                    29
                </span>
                <span className="introduction-packages__item__charges--suffix">
                </span>
                <span className="introduction-packages__item__charges__period">
                /mo
                </span>
            </div>

        </Scoped>
    )


}

const Scoped = styled.div`
width:100%;
.currency-component-container{
    display: flex;
    justify-content:center;
    .introduction-packages__item__charges{
        &--prefix{
            font-family: 'Roboto';
            color: #00142d;
            font-size: 24px;
            font-style: normal;
            font-weight: 800;
            position: relative;
            top: 2%;
            line-height: 48px;
        }
        &--content{
            font-family: 'Roboto';
            color: #00142d;
            font-size: 40px;
            font-style: normal;
            font-weight: bold;
            -ms-flex-item-align: end;
            align-self: flex-end;
            margin: 0 2px;
            letter-spacing: -0.05em;
            line-height: 150%;
        }
        &--suffix{
            font-family: 'Roboto';
            color: #848e9b;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            -ms-flex-item-align: end;
            align-self: flex-end;
            margin: 0 2px;
            letter-spacing: -0.05em;
            line-height: 50px;
        }
        &__period{
            font-family: 'Roboto';
            color: #848e9b;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            -ms-flex-item-align: end;
            align-self: flex-end;
            margin: 0 2px;
            letter-spacing: -0.05em;
            line-height: 50px;
        }
    }
}

`