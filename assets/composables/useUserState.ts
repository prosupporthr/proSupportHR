// composables/useUserState.ts
export const useUserState = () => {
    const email = useState<string>('email', () => '');
    const phone = useState<string>('phone', () => '');
    const productId = useState<string>('product', () => '');
  
    const updateEmail = (newEmail: string) => {
      email.value = newEmail;
    };
  
    const updatePhone = (newPhone: string) => {
      phone.value = newPhone;
    };
  
    const updateProductId = (newIndex: string) => {
        productId.value = newIndex;
    };
  
    return {
      productId,
      email,
      phone,
      updateEmail,
      updatePhone,
      updateProductId
    };
};