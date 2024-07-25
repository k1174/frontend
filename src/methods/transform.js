export default function transform(formData) {
    const transformedData = {
        id: formData.id,
        title: formData.title,
        type: formData.type,
        description: formData.description,
        location: formData.location,
        salary: formData.salary,
        company: {
            name: formData.company,
            description: formData.company_description,
            contactEmail: formData.contact_email,
            contactPhone: formData.contact_phone,
        }
    };
    return transformedData;
}