import React from 'react';
import '../styles/Features.css'
function AddPlant(props) {
    return (
        <div>
            <body className="bg-green-50">
                <div className="min-h-screen py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="form-container bg-white">
                            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Add New Plant</h2>

                            <form id="addPlantForm" className="space-y-6">
                                <div className="flex justify-center mb-8">
                                    <div className="preview-container" id="imagePreview">
                                        <div className="text-center text-green-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p>Upload Plant Image</p>
                                        </div>
                                    </div>
                                    <input type="file" id="plantImage" accept="image/*" className="hidden" />
                                </div>

                                {/* <!-- Plant Details --> */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Plant Name</label>
                                        <input type="text" name="name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200" required />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Species</label>
                                        <input type="text" name="species" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200" />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Care Level</label>
                                        <select name="careLevel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200">
                                            <option value="beginner">Beginner</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="expert">Expert</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Watering Frequency</label>
                                        <input type="text" name="wateringFrequency" placeholder="e.g., Once a week" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200" />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Sunlight Needs</label>
                                        <select name="sunlight" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200">
                                            <option value="full_sun">Full Sun</option>
                                            <option value="partial_sun">Partial Sun</option>
                                            <option value="shade">Shade</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Description</label>
                                    <textarea name="description" rows="4" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200" placeholder="Add any additional details about your plant..."></textarea>
                                </div>

                                <div className="flex justify-end space-x-4">
                                    <button type="button" onclick="window.location.href='index.html'" className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-300">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition duration-300">
                                        Add Plant
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}

export default AddPlant;

{/* 

<script>
      // Image preview functionality
      const imagePreview = document.getElementById('imagePreview');
      const plantImage = document.getElementById('plantImage');

      imagePreview.addEventListener('click', () => {
        plantImage.click();
      });

      plantImage.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            imagePreview.innerHTML = <img src="${e.target.result}" alt="Plant preview">;
            imagePreview.classList.add('has-image');
          };
          reader.readAsDataURL(file);
        }
      });

      // Form submission
      const addPlantForm = document.getElementById('addPlantForm');
      addPlantForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Create FormData object
        const formData = new FormData(addPlantForm);
        
        // Add the image file
        const imageFile = plantImage.files[0];
        if (imageFile) {
          formData.append('image', imageFile);
        }

        // Here you would typically send the formData to your server
        console.log('Form submitted with data:', Object.fromEntries(formData));
        
        // For demo purposes, show success message
        alert('Plant added successfully!');
        window.location.href = 'index.html';
      });
    </script>

*/}