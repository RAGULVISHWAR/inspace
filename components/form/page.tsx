// components/ContactForm.js
"use client"
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useState, FormEvent } from 'react';
import { X } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    phone: string;
    whatsappUpdates: boolean;
    projectLocation: string;
}

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        whatsappUpdates: false,
        projectLocation: ''
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    whatsappUpdates: false,
                    projectLocation: ''
                });
            } else {
                alert('Something went wrong.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Error submitting form.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData(prev => ({
            ...prev,
            whatsappUpdates: checked
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto bg-white p-3 md:p-8 w-3/4 md:w-2/4 rounded-lg">
            <div className='text-primary font-semibold text-[clamp(1rem,1.5vw,2rem)] flex gap-3 place-self-center '>
                <X className='w-fit size-8 place-self-center' />
                <p>Talk to a design expert</p>
            </div>
            <div className="flex flex-col gap-4 max-w-lg mx-auto">
                {/* Name */}
                <div>
                    <Input
                        id="name"
                        className="w-full border-2 border-gray-500 "
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <Input
                        id="email"
                        type="email"
                        className="w-full border-2 border-gray-500"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Phone with Country Code */}
                <div className="flex space-x-2">
                    <div className="flex-1">
                        <Input
                            id="phone"
                            type="tel"
                            className="w-full border-2 border-gray-500"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* WhatsApp Updates Checkbox */}
                <div>
                    <div className="flex items-center">
                        <Checkbox
                            id="whatsappUpdates"
                            checked={formData.whatsappUpdates}
                            onCheckedChange={handleCheckboxChange}
                        />
                        <span className="text-sm font-medium text-gray-700 ml-2">
                            Receive updates on WhatsApp
                        </span>
                    </div>
                </div>

                {/* Project Location */}
                <div>
                    <Input
                        id="projectLocation"
                        className="w-full border-2 border-gray-500"
                        placeholder="Project Location"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </Button>
                <p className='text-[clamp(0.5rem,0.8vw,1rem)] font-medium'>By submitting this form, you agree to the <span className='text-primary'>privacy policy </span >& <span className='text-primary'>terms and conditions</span> </p>
            </div>

        </form>
    );
}