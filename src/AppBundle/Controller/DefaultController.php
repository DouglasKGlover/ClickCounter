<?php

namespace AppBundle\Controller;

use AppBundle\Entity\MainScore;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class DefaultController extends Controller
{
    /**
     * @Route("/api/{slug}", name="API")
     */
    public function apiAction(Request $request, $slut = null)
    {
        // replace this example code with whatever you need
        // Symfony Backend integration
    }

    /**
     * @Route("/main-score/new")
     */
    public function newMainScore()
    {
        $score = new MainScore();
        $score->setName('DKG');
        $score->setScore(rand(0,160));

        $em = $this->getDoctrine()->getManager();
        $em->persist($score);
        $em->flush();

        return new Response('<html><body>Score created!</body></html>');
    }

    /**
     * @Route("/main-leaderboard")
     */
    public function showMainScores()
    {
        $em = $this->getDoctrine()->getManager();
        $scores = $em->getRepository('AppBundle:MainScore')
            ->findAll();

        return $this->render('default/main-leaderboard.html.twig', [
            'scores' => $scores
        ]);
    }

    /**
     * @Route("/", name="homepage")
     * @Route("/{slug}", name="homepage2")
     */
    public function indexAction(Request $request, $slug = null)
    {
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }


}
