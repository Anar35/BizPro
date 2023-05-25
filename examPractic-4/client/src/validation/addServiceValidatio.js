import * as yup from "yup";

export const addServiceSchema = yup.object().shape({
  iconName: yup.string().min(7).required(),
  title: yup.string().min(8).required(),
  desc: yup.string().min(15).required(),
});
