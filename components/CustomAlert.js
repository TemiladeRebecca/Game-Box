import { Modal, View, Text, Button, StyleSheet } from 'react-native';

export default function CustomAlert({isModalVisible, closeAlert}) {


  return (
    <View style={styles.container}> 
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.alertBox}>
            <Text style={styles.alertTitle}>Invalid Number</Text>
            <Text style={styles.alertMessage}>Enter a number between 1 and 99</Text>
            <Button title="OK" onPress={closeAlert} color="#ff0000" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBox: {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
});
