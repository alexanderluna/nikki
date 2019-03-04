export const required = field => value => (
  value
    ? undefined
    : `${field} can't be blank`
);
export const minLength = min => value => (
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined
);
export const minLength10 = minLength(10);
export const minLength20 = minLength(20);
export const requiredTitle = required('title');
export const requiredContent = required('description');
