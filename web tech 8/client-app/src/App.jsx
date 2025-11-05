import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// Use environment variable for API URL (works for both local and production)
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = `${API_BASE_URL}/api/policies`;

function App() {
  const [policies, setPolicies] = useState([]);
  const [formData, setFormData] = useState({
    policyNumber: "",
    customerName: "",
    policyType: "",
    premium: "",
    startDate: "",
    endDate: "",
    status: "Active",
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all policies on component mount
  useEffect(() => {
    fetchPolicies();
  }, []);

  // GET - Fetch all policies
  const fetchPolicies = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(API_URL);
      setPolicies(response.data);
    } catch (err) {
      setError("Failed to fetch policies. Make sure the server is running.");
      console.error("Error fetching policies:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field changed: ${name} = ${value}`); // Debug log
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Format date for input (YYYY-MM-DD)
  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  // POST - Create new policy
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      if (editingId) {
        // PUT - Update existing policy
        await axios.put(`${API_URL}/${editingId}`, formData);
        setEditingId(null);
      } else {
        // POST - Create new policy
        await axios.post(API_URL, formData);
      }

      // Reset form and refresh policy list
      setFormData({
        policyNumber: "",
        customerName: "",
        policyType: "",
        premium: "",
        startDate: "",
        endDate: "",
        status: "Active",
      });
      fetchPolicies();
    } catch (err) {
      setError("Failed to save policy. Please check all fields.");
      console.error("Error saving policy:", err);
    }
  };

  // Edit policy - populate form
  const handleEdit = (policy) => {
    setFormData({
      policyNumber: policy.policyNumber,
      customerName: policy.customerName,
      policyType: policy.policyType,
      premium: policy.premium,
      startDate: policy.startDate.split("T")[0],
      endDate: policy.endDate.split("T")[0],
      status: policy.status,
    });
    setEditingId(policy._id);
  };

  // DELETE - Delete policy
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this policy?")) {
      try {
        setError("");
        await axios.delete(`${API_URL}/${id}`);
        fetchPolicies();
      } catch (err) {
        setError("Failed to delete policy.");
        console.error("Error deleting policy:", err);
      }
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setFormData({
      policyNumber: "",
      customerName: "",
      policyType: "",
      premium: "",
      startDate: "",
      endDate: "",
      status: "Active",
    });
    setEditingId(null);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center mb-4">
            <i className="bi bi-shield-check"></i> Online Insurance Policy
            Management
          </h1>
        </div>
      </div>

      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {error}
          <button
            type="button"
            className="btn-close"
            onClick={() => setError("")}
          ></button>
        </div>
      )}

      <div className="row">
        {/* Form Section */}
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">
                {editingId ? "Edit Policy" : "Add New Policy"}
              </h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Policy Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="policyNumber"
                    value={formData.policyNumber}
                    onChange={handleChange}
                    required
                    placeholder="e.g., POL-2024-001"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Customer Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                    placeholder="Enter customer name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Policy Type</label>
                  <select
                    className="form-select"
                    name="policyType"
                    value={formData.policyType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Life Insurance">Life Insurance</option>
                    <option value="Health Insurance">Health Insurance</option>
                    <option value="Vehicle Insurance">Vehicle Insurance</option>
                    <option value="Home Insurance">Home Insurance</option>
                    <option value="Travel Insurance">Travel Insurance</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Premium (₹)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="premium"
                    value={formData.premium}
                    onChange={handleChange}
                    required
                    placeholder="Enter premium amount"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    style={{
                      cursor: "pointer",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                      padding: "0.375rem 0.75rem",
                      fontSize: "1rem",
                      fontFamily: "inherit",
                    }}
                  />
                  <small className="form-text text-muted">
                    Click to select date
                  </small>
                </div>

                <div className="mb-3">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                    min={formData.startDate || undefined}
                    style={{
                      cursor: "pointer",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                      padding: "0.375rem 0.75rem",
                      fontSize: "1rem",
                      fontFamily: "inherit",
                    }}
                  />
                  <small className="form-text text-muted">
                    Click to select date
                  </small>
                </div>

                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="Active">Active</option>
                    <option value="Expired">Expired</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    {editingId ? "Update Policy" : "Add Policy"}
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Policies List Section */}
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Insurance Policies</h5>
              <button className="btn btn-light btn-sm" onClick={fetchPolicies}>
                Refresh
              </button>
            </div>
            <div className="card-body">
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : policies.length === 0 ? (
                <div className="alert alert-info">
                  No policies found. Add your first policy!
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th>Policy #</th>
                        <th>Customer</th>
                        <th>Type</th>
                        <th>Premium</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {policies.map((policy) => (
                        <tr key={policy._id}>
                          <td>{policy.policyNumber}</td>
                          <td>{policy.customerName}</td>
                          <td>{policy.policyType}</td>
                          <td>₹{policy.premium.toLocaleString()}</td>
                          <td>
                            {new Date(policy.startDate).toLocaleDateString()}
                          </td>
                          <td>
                            {new Date(policy.endDate).toLocaleDateString()}
                          </td>
                          <td>
                            <span
                              className={`badge ${
                                policy.status === "Active"
                                  ? "bg-success"
                                  : policy.status === "Expired"
                                  ? "bg-warning"
                                  : "bg-danger"
                              }`}
                            >
                              {policy.status}
                            </span>
                          </td>
                          <td>
                            <button
                              className="btn btn-sm btn-warning me-2"
                              onClick={() => handleEdit(policy)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(policy._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
