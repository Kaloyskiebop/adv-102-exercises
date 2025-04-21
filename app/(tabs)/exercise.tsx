import { StyleSheet, Image, Platform, View, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { router } from 'expo-router';

export default function TabTwoScreen() {
  const details = [
    {id: 1, title: "Exercise"},
    {id: 2, title: "Exercise"},
    {id: 3,
    title: "Exercise",
    description: "Create login screen \n Login screen fields",
    list: ["Email", "Password"],
    route: "/Login/login" as const,
    },
    {id: 4,
    title: "Exercise",
    description: "Create useState and UseEffect screens",
    route: "/screens/screens" as const,
    },
    {id: 5, 
     title: "Exercise",
     description: "Create register screen \n Register screen fields",
     list: ["Image Picker", "Name", "Password", "Register Button"],
     route: "/Register/register" as const
    },
    {id: 6, title: "Exercise",
     description: "Create a crud \n using useReducer and useContext",
     route: "/screens/crudContainer" as const},
    {id: 7, title: "Exercise",
     description: "Create a simple quiz app \n using API from Open Trivia Database",
     route: "/screens/quiz" as const},
    {id: 8, title: "Exercise",
     description: "Create a Login and Registration Screen \n using React Hook Form",
     route: "/screens/Exercise_8/container" as const},
  ]

  return (
      <ScrollView>
        <View style={styles.container}>
          {details.map((d, _) => (
            <Card
              key={d.id}
              style={styles.cardContainer}
              onPress={() => d.route && router.push(d.route)}
            >
              <Card.Content>
                <Title style={styles.cardTitle}>{`${d.title} ${d.id}`}</Title>
                <Paragraph style={styles.cardDescription}>{d.description}</Paragraph>
                {d.list && (
                  <View>
                    {d.list.map((li, i) => (
                      <Text style={styles.cardListTitle} key={i}>• {li}</Text>
                    ))}
                  </View>
                )}
              </Card.Content>
            </Card>
          ))}
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 15,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    cardContainer: {
      margin: 6,
      width: "90%",
      minHeight: 100,
      padding: 10
    },
    cardTitle: {
      fontSize: 30,
      fontWeight: "600",
    },
    cardDescription: {
      fontWeight: "800",
    },
    cardListTitle: {
      fontWeight: "800"
    }
});
