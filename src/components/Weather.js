import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Modal,
} from "react-native";
import axios from "axios";

function Weather() {
  const [location, setLocation] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedLatLng, setSelectedLatLng] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleLocationChange = async (query) => {
    setLocation(query);

    if (query.length >= 3) {
      const tomTomUrl = `https://api.tomtom.com/search/2/geocode/${query}.json?key=k6cSq5FLgC72KvbQLOVOWZLq7JAiAmtY&countrySet=IN`;
      try {
        const response = await axios.get(tomTomUrl);
        const suggestions = response.data.results.map((result) => ({
          address: result.address.freeformAddress,
          lat: result.position.lat,
          lon: result.position.lon,
        }));
        setLocationSuggestions(suggestions);
      } catch (error) {
        console.error("Error fetching location suggestions:", error);
      }
    } else {
      setLocationSuggestions([]);
    }
  };

  const handleAddressClick = (address, lat, lon) => {
    setSelectedAddress(address);
    setSelectedLatLng({ lat, lon });
    setLocation(address);
    setLocationSuggestions([]);
  };

  const fetchWeatherData = async () => {
    if (!selectedLatLng) return;

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${selectedLatLng.lat}&longitude=${selectedLatLng.lon}&current=temperature_2m&daily=temperature_2m_max,temperature_2m_min,daylight_duration,precipitation_hours&timezone=auto`;

    try {
      const response = await axios.get(weatherUrl);
      const currentTemp = response.data.current.temperature_2m;
      const daily = response.data.daily;

      let forecast = `Current Temperature: ${currentTemp}°C\n\n7-Day Forecast:\n`;
      for (let i = 0; i < daily.time.length; i++) {
        // Format date to DD-MM-YY
        const isoDate = daily.time[i];
        const date = new Date(isoDate);
        const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getFullYear()).slice(-2)}`;

        forecast += `Date: ${formattedDate}\nMax Temp: ${daily.temperature_2m_max[i]}°C, Min Temp: ${daily.temperature_2m_min[i]}°C\nDaylight: ${daily.daylight_duration[i]} seconds, Precipitation Hours: ${daily.precipitation_hours[i]} hours\n\n`;
      }
      setWeatherInfo(forecast);
      setModalVisible(true); // Show modal when weather data is fetched
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.header}>Weather Forecast Details</Text>

          <TextInput
            style={styles.input}
            value={location}
            onChangeText={handleLocationChange}
            placeholder="Enter Location"
          />

          {locationSuggestions.length > 0 && (
            <FlatList
              data={locationSuggestions}
              keyExtractor={(item, index) => index.toString()}
              style={styles.suggestionsList}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.suggestionItem}
                  onPress={() => handleAddressClick(item.address, item.lat, item.lon)}
                >
                  <Text>{item.address}</Text>
                </TouchableOpacity>
              )}
            />
          )}

          <TouchableOpacity style={styles.button} onPress={fetchWeatherData}>
            <Text style={styles.buttonText}>Get Forecast</Text>
          </TouchableOpacity>
        </View>

        {/* Weather Modal */}
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeader}>Weather Information</Text>
              <ScrollView>
                <Text style={styles.forecast}>
                  {selectedAddress && `Selected Location: ${selectedAddress}\n\n`}
                  {weatherInfo}
                </Text>
              </ScrollView>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#E6E6FA" },
  scrollViewContent: { flexGrow: 1, padding: 16 },
  container: { backgroundColor: "#E6E6FA", borderRadius: 25, padding: 16 },
  header: { textAlign: "center", fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
    textAlign: "center",
    color: "#000", // Set text color to black
  },
  suggestionsList: { maxHeight: 150, marginBottom: 16 },
  suggestionItem: {
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 4,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 16,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "50%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  closeButton: {
    backgroundColor: "#f4d35e",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  closeButtonText: { color: "#1f271b", fontWeight: "bold" },
  forecast: { textAlign: "center", fontSize: 14, whiteSpace: "pre-wrap" },
});

export default Weather;
