window.__CONFIG__ = {
    API_KEY: '62d39dba-ed2a-436d-98cc-9f9932deb4d3', // Secret key
    REDIRECT_URL: 'https://sua-url.com/redirecionamento', // URL para redirecionamento após aprovação
    PURCHASE_URL: 'https://app.ghostspay.com/api/v1/transaction.purchase', // Request post da api, gera o pix
    GET_PAYMENT_URL: 'https://app.ghostspay.com/api/v1/transaction.getPayment', // Request get da api, verifica o status do pix
    PRICE_VALUE: 1990,            // Valor em centavos usado na requisição
    DISPLAY_PRICE: 'R$ 19,90'       // Valor exibido na página
  };
  